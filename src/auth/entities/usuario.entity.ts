import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoDocumento } from "./tipo-documento.entity";
import { TipoRol } from "./tipo-rol.entity";
import { Producto } from '../../productos/entities/producto.entity';

@Entity('USUARIOS')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @Column('text', {nullable: true})
    primer_ap?: string;

    @Column('text', {nullable: true})
    segundo_ap?: string;

    @ManyToOne(
        () => TipoDocumento,
        ( tipo_documento: TipoDocumento) => tipo_documento.usuario
    )
    tipo_documento: TipoDocumento;

    @Column('text')
    documento: string;

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

    @Column('text', {
        select: false
    })
    contrasena: string;

    @Column('text', {nullable: true})
    logo?: string;

    @Column('text', {nullable: true})
    direccion?: string;

    @OneToMany(
        () => Producto,
        (producto) => producto.usuario,
        { eager: true}
    )
    producto: Producto;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.correo = this.correo.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }
}
