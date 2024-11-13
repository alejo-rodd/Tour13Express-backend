import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity('TIPO_ROL')
export class TipoRol{

    @PrimaryColumn()
    id: string;

    @Column('text', { unique: true})
    nombre: string;

    @OneToMany(
        () => Usuario,
        (usuario: Usuario) => usuario.rol
    )
    usuario: Usuario;    
    
}