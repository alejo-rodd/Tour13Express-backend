import { IsEmail, IsOptional, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {

    @IsString()
    @MaxLength(50)
    nombre: string;

    @IsString()
    @IsOptional()
    @MaxLength(50)
    primer_ap?: string;

    @IsString()
    @IsOptional()
    @MaxLength(50)
    segundo_ap?: string;

    // @IsString()
    // @Length(1)
    // tipo_documento: string;

    @IsString()
    documento: string;

    // @IsString()
    // @Length(1)
    // rol: string;

    @IsString()
    @MaxLength(50)
    telefono: string;

    @IsString()
    @IsEmail()
    @MaxLength(100)
    correo: string;

    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    contrasena: string;

    @IsOptional()
    @MaxLength(100)
    logo?: string;

    @IsOptional()
    @MaxLength(100)
    direccion?: string;
}
