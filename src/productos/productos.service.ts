import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoCategoria } from './entities/tipo-categoria.entity';
import { Repository } from 'typeorm';
import { CreateTipoDto } from 'src/auth/dto/create-tipo.dto';

@Injectable()
export class ProductosService {

  private readonly logger = new Logger('AuthService');

  constructor(
    @InjectRepository(TipoCategoria)
    private readonly tipoCategoriaRepository: Repository<TipoCategoria>
  ){}

  async createTipoCategoria(createTipoCategoriaDto: CreateTipoDto){
    try {
      const tipoCategoria = this.tipoCategoriaRepository.create(createTipoCategoriaDto);
      await this.tipoCategoriaRepository.save(tipoCategoria);
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  create(createProductoDto: CreateProductoDto) {
    return 'This action adds a new producto';
  }

  findAll() {
    return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }

  private handleDBErrors( error: any ): never {

    if ( error.code === '23505' ) 
      throw new BadRequestException( error.detail );

    console.log(error)

    throw new InternalServerErrorException('Please check server logs');

  }
}
