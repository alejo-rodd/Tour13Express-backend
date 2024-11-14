import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { intialData } from './data/seed-data';
import { ProductosService } from 'src/productos/productos.service';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly authService: AuthService,
    private readonly productoService: ProductosService
  ){}

  async runSeed(){
    await this.insertTipos();

    return 'SEED EXECUTE'

  }

  private async insertTipos(){
    const tipoDocumentos = intialData.tipoDocumento;
    const tipoRoles = intialData.tipoRol;
    const tipoCategorias = intialData.tipoCategoria;
    const insertPromises = [];  
    
    tipoDocumentos.forEach( tipoDocumento => {
      insertPromises.push(this.authService.createTipoDocumento(tipoDocumento))
    });
    tipoRoles.forEach( tipoRol => {
      insertPromises.push(this.authService.createTipoRol(tipoRol))
    });
    tipoCategorias.forEach( tipoCategoria => {
      insertPromises.push(this.productoService.createTipoCategoria(tipoCategoria))
    });
    await Promise.all( insertPromises );
    return true;
  }

 
}
