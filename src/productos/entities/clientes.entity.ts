import { TipoDocumento } from "src/auth/entities/tipo-documento.entity";
import { text } from "stream/consumers";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedidos.entity";

@Entity('CLIENTES')
export class Cliente{

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

    @Column({
        type: 'text',
        unique: true
    })
    documento: string;

    @Column('text')
    telefono: string;

    @Column('text')
    direccion: string;
    
    @OneToMany(
        () => Pedido,
        (pedido) => pedido.cliente,
        { eager: true}
    )
    pedido: Pedido;
}