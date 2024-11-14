import * as bcrypt from 'bcrypt';

interface SeedTipo {
  id: string;
  nombre: string;
}

interface SeedData {
  tipoDocumento: SeedTipo[];
  tipoRol: SeedTipo[];
  tipoCategoria: SeedTipo[];
}

export const intialData: SeedData = {
  tipoDocumento: [
    {
      id: '1',
      nombre: 'CC',
    },
    {
      id: '2',
      nombre: 'CE',
    },
    {
      id: '3',
      nombre: 'Pasaporte',
    },
    {
      id: '4',
      nombre: 'Nit',
    },
  ],
  tipoRol: [
    {
      id: '1',
      nombre: 'guia',
    },
    {
      id: '2',
      nombre: 'emp',
    },
  ],
  tipoCategoria: [
    {
      id: '1',
      nombre: 'Ropa',
    },
    {
      id: '2',
      nombre: 'Calzado',
    },
    {
      id: '3',
      nombre: 'Accesorios',
    },
    {
      id: '4',
      nombre: 'Recordatorios',
    },
    {
      id: '5',
      nombre: 'Otros',
    },
    {
      id: '6',
      nombre: 'Tour',
    },
  ],
};
