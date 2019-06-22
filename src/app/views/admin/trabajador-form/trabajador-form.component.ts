import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajador-form',
  templateUrl: './trabajador-form.component.html',
  styleUrls: ['./trabajador-form.component.scss']
})
export class TrabajadorFormComponent implements OnInit {

  constructor() { }

  datoreserva ={
    apellidop :"",
    apellidom : ""
  }

  dato =  {
    nombre : "",
    apellido: "", 
    dni : null,
    telefono:"",
    correo:""
  }

  usuario ={
    idusuario : 0,
    usuario : "",
    password : "",
    rol : "0"
  }
  ngOnInit() {
  }

  savetrabajador(){
    //guardar los datos del trabajador y los datos del usuario

    this.dato.apellido = this.datoreserva.apellidop + " " + this.datoreserva.apellidom;

    this.usuario.usuario = this.dato.nombre.charAt(0) + this.datoreserva.apellidop;
    this.usuario.password = this.dato.dni;

    console.log("estas intentando guardar "+ this.dato.nombre);
    console.log("estas intentando guardar "+ this.dato.nombre.charAt(0));
    console.log("estas intentando guardar aprllido "+ this.dato.apellido);
    console.log("estas intentando guardar dni "+ this.dato.dni);
    console.log("estas intentando  guardar telefono "+ this.dato.telefono);
    console.log("estas intentando  guardar correo "+ this.dato.correo);

    console.log("estas intentando  guardar usuario "+ this.usuario.usuario);
    console.log("estas intentando  guardar usuario "+ this.usuario.password);
    console.log("estas intentando  guardar rol "+ this.usuario.rol);
    this.limpiar();


  }

  limpiar(){
    this.dato.nombre="";
    this.dato.apellido="";
    this.datoreserva.apellidop="";
    this.datoreserva.apellidom="";
    this.dato.dni="";
    this.dato.telefono="";
    this.dato.correo="";
    this.usuario.rol="";
    

  }
}
