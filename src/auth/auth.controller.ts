import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { TipoDocumento } from './entities/tipo-documento.entity';
import { CreateTipoDto } from './dto/create-tipo.dto';
import { TipoRol } from './entities/tipo-rol.entity';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter, fileNamer } from 'src/files/helpers';
import { diskStorage } from 'multer';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('register')
  @UseInterceptors(FileInterceptor('logo', {
    fileFilter: fileFilter,
    storage: diskStorage({
      destination: './static/logos',
      filename: fileNamer
    })
  }))
  createUsuario(
    @Body('usuario') createUsuarioDto: CreateUsuarioDto,
    @Body('tipoDocumento') tipoDocumento: string,
    @Body('rol') rol: string,
    @UploadedFile() logo?: Express.Multer.File
  ){
    if(logo) 
      createUsuarioDto.logo = logo.filename;
    return this.authService.createUsuario(createUsuarioDto, tipoDocumento, rol);
  }
  
  @Post('login')
  loginUser(@Body() loginUsuarioDto: LoginUsuarioDto){
    return this.authService.login(loginUsuarioDto);
  }
}
