import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoDocumento } from './entities/tipo-documento.entity';
import { Repository } from 'typeorm';
import { TipoRol } from './entities/tipo-rol.entity';
import { Usuario } from './entities/usuario.entity';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';


@Injectable()
export class AuthService {
  
  private readonly logger = new Logger('AuthService');

  constructor(
    @InjectRepository(TipoDocumento)
    private readonly tipoDocumentoRepository: Repository<TipoDocumento>,
    
    @InjectRepository(TipoRol)
    private readonly tipoRolRepository: Repository<TipoRol>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    private readonly jwtService: JwtService
  ){}

  async createUsuario(createUsuarioDto: CreateUsuarioDto, tipoDocumentoId: string, tipoRolId: string){
    try {
      const {contrasena, ...usuarioData } = createUsuarioDto;
      const tipoDocumento = await this.tipoDocumentoRepository.findOneBy({id: tipoDocumentoId});
      const tipoRol = await this.tipoRolRepository.findOneBy({id: tipoRolId});

      const usuario = this.usuarioRepository.create({
        ...usuarioData,
        contrasena: bcrypt.hashSync(contrasena, 10),
        tipo_documento: tipoDocumento,
        rol: tipoRol
      });
      await this.usuarioRepository.save(usuario);
      delete usuario.contrasena;

      return{
        ...usuario,
        token: this.getJwtToken({id: usuario.id})
      }

    } catch (error) {
      this.handleDBErrors(error);
    }

    
  }










  private getJwtToken( payload: JwtPayload ) {

    const token = this.jwtService.sign( payload );
    return token;

  }


  async createTipoDocumento(createTipoDocumentoDto: CreateTipoDto){
    try {
      const tipoDocumento = this.tipoDocumentoRepository.create(createTipoDocumentoDto);
      await this.tipoDocumentoRepository.save(tipoDocumento);
      return tipoDocumento;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async createTipoRol(createTipoRolDto: CreateTipoDto){
    try {
      const tipoRol = this.tipoRolRepository.create(createTipoRolDto);
      await this.tipoRolRepository.save(tipoRol);
      return tipoRol;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  
  private handleDBErrors( error: any ): never {

    if ( error.code === '23505' ) 
      throw new BadRequestException( error.detail );

    console.log(error)

    throw new InternalServerErrorException('Please check server logs');

  }
}
