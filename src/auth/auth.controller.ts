import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { TipoDocumento } from './entities/tipo-documento.entity';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { TipoRol } from './entities/tipo-rol.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('register')
  createUsuario(
    @Body('usuario') createUsuarioDto: CreateUsuarioDto,
    @Body('tipoDocumento') tipoDocumento: string,
    @Body('rol') rol: string,
    
  ){
    return this.authService.createUsuario(createUsuarioDto, tipoDocumento, rol);
  }
  
}
