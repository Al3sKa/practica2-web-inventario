export class Producto {
    constructor(
      public id: number,
      public nombre: string,
      public precio: number,
      public imagen: string,
      public cantidad: number = 1 // valor por defecto en 1
    ) {}
  }
  