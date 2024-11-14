import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Cliente } from './entities/clientes.entity';
import { Producto } from './entities/producto.entity';
import { TipoCategoria } from './entities/tipo-categoria.entity';
import { Pedido } from './entities/pedidos.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports: [
    ConfigModule, 
    TypeOrmModule.forFeature([Cliente, Producto, TipoCategoria, Pedido])
  ],
  exports: [
    ProductosService,
    TypeOrmModule
  ]
})
export class ProductosModule {}
