import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Cliente } from "src/productos/entities/clientes.entity";

@Entity('TIPO_DOCUMENTO')
export class TipoDocumento {

    @PrimaryColumn()
    id: string;

    @Column('text', { unique: true})
    nombre: string;

    @OneToMany(
        () => Usuario,
        (usuario: Usuario) => usuario.tipo_documento
    )
    usuario: Usuario;   

    @OneToMany(
        () => Cliente,
        (cliente: Cliente) => cliente.tipo_documento
    )
    cliente: Cliente;   
}