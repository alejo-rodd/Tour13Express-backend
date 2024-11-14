import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from '../../auth/dto/create-usuario.dto';

export class UpdateAuthDto extends PartialType(CreateUsuarioDto) {}
