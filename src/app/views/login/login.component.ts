import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService,NgbModalConfig,NgbModal],
})
export class LoginComponent {
  public user:Usuario;
  public message:string;
  public loading = false;
  public customLoadingTemplate;
  public showAlertLogin;
  public logeo={
    correo:"",
    contrasena:""
  }

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _router: Router,
    private _usuarioService: UsuarioService
  ) { 
    //config.backdrop = 'static';
    //config.keyboard = false;
  }

  ngOnInit(){
    //localStorage.clear();
    //this.showAlertLogin = false;
    //this.message = "";
  }

  login() {
    this._router.navigate(['/home']);
    /*this._usuarioService.login(this.logeo).subscribe(
      data=>{
        if(data.code===200){
          localStorage.setItem('usuario', JSON.stringify(data.usuario));
          localStorage.setItem('token',data.token);
          this._router.navigate(['/home']);
        }
        else{
          this.message = "Usuario incorrecto";
          this.showAlertLogin = true;
          this.logeo.contrasena="";
          this.logeo.correo="";
        }
      },
      error=>{
        console.log(error)
      }
    );*/
  }

  removeAlertLogin(){
    //this.showAlertLogin = false;
  }



}
