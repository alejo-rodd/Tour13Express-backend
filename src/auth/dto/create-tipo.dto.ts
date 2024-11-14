import { IsString, Length, MaxLength } from "class-validator";

export class CreateTipoDto {

    @IsString()
    @Length(1)
    id: string;

    @IsString()
    @MaxLength(30)
    nombre: string;

}