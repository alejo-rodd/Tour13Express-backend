import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { TipoDocumento } from './entities/tipo-documento.entity';
import { ConfigModule } from '@nestjs/config';
import { TipoRol } from './entities/tipo-rol.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule, 
    TypeOrmModule.forFeature([Usuario, TipoDocumento, TipoRol])
  ],
  exports: [TypeOrmModule]
})
export class AuthModule {}
