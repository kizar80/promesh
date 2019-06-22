export class Usuario {
    // modelo de datos usuario
    constructor(
      public id_usuario:number,
      public id_perfil_admin:number,
      public nombre:string,
      public apellidos:string,
    ) { }
  }