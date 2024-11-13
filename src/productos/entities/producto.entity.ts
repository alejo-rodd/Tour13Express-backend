import { Usuario } from 'src/auth/entities/usuario.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TipoCategoria } from './tipo-categoria.entity';
import { Pedido } from './pedidos.entity';

@Entity('PRODUCTOS')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @ManyToOne(
    () => Usuario,
    (usuario: Usuario) => usuario.producto
  )
  usuario: Usuario;

  @ManyToOne(
    () => TipoCategoria,
    (categoria: TipoCategoria) => categoria.producto
  )
  categoria: TipoCategoria;

  @Column('text')
  nombre: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @Column('text')
  imagen: string;

  @Column('numeric', {
    default: 0,
  })
  valor: number;

  @OneToMany(
    () => Pedido,
    (pedido) => pedido.producto,
    { eager: true}
    )
  pedido: Pedido;
}
