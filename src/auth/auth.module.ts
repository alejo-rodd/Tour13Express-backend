import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { TipoDocumento } from './entities/tipo-documento.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TipoRol } from './entities/tipo-rol.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule, 
    TypeOrmModule.forFeature([Usuario, TipoDocumento, TipoRol]),
    PassportModule.register({ defaultStrategy: 'jwt' }),

    JwtModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      useFactory: ( configService: ConfigService ) => {
        // console.log('JWT Secret', configService.get('JWT_SECRET') )
        // console.log('JWT SECRET', process.env.JWT_SECRET)
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn:'2h'
          }
        }
      }
    })
  ],
  exports: [
    AuthService,
    TypeOrmModule
  ]
})
export class AuthModule {}
