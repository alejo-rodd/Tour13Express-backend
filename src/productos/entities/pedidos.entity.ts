import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./clientes.entity";
import { Producto } from "./producto.entity";

@Entity('PEDIDOS')
export class Pedido{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    numero: string;

    @ManyToOne(
        () => Cliente,
        (cliente: Cliente) => cliente.pedido
    )
    cliente: Cliente;

    @ManyToOne(
        () => Producto,
        (producto: Producto) => producto.pedido
    )
    producto: Producto;

    @Column('numeric')
    cantidad: number;

    @Column('date')
    fecha: Date;
}