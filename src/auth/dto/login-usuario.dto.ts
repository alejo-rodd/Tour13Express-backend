import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';


export class LoginUsuarioDto {

    @IsString()
    @IsEmail()
    correo: string;

    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    contrasena: string;

}