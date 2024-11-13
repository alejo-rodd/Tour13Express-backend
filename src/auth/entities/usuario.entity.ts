import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoDocumento } from "./tipo-documento.entity";
import { TipoRol } from "./tipo-rol.entity";
import { Producto } from '../../productos/entities/producto.entity';

@Entity('USUARIOS')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @Column('text')
    primer_ap: string;

    @Column('text')
    segundo_ap: string;

    @ManyToOne(
        () => TipoDocumento,
        ( tipo_documento: TipoDocumento) => tipo_documento.usuario
    )
    tipo_documento: string;

    @Column('text')
    documento_usuario: string;

    @ManyToOne(
        () => TipoRol,
        ( rol: TipoRol) => rol.usuario
    )
    rol: TipoRol;

    @Column('text')
    telefono: string;

    @Column('text',{
        unique: true
    })
    correo: string;

    @Column('text')
    contrasena: string;

    @Column('text')
    logo: string;

    @Column('text')
    direccion: string;

    @OneToMany(
        () => Producto,
        (producto) => producto.usuario,
        { eager: true}
    )
    producto: Producto;
}
