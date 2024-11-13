import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity('TIPO_CATEGORIA')
export class TipoCategoria{

    @PrimaryColumn()
    id: string;

    @Column('text', { unique: true})
    nombre: string;

    @OneToMany(
        () => Producto,
        (producto: Producto) => producto.categoria
    )
    producto: Producto;   
}