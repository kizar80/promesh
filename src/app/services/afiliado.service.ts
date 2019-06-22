import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

    public url: String = '';
    public identity;
    public token='';
    constructor(
      private _http: Http
      ) {
      this.url = GLOBAL.url;
      this.token='Bearer '+localStorage.getItem('token');
    }

    registrarAfiliado(afiliado){
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        console.log(this.token);
        return this._http.post(this.url+'afiliado/registrar',afiliado,{headers:headers}).map(res=>res.json());
    }

    registrarSede(sede){
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'afiliado/sede/registrar',sede,{headers:headers}).map(res=>res.json());
    }

    listarSedes(id_afiliado){
        var data={
            "id_afiliado":id_afiliado,
            "id_sede": 0
        };
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'afiliado/sede/listar',data,{headers:headers}).map(res=>res.json());
    }

    listarUsuarioSede(id_sede){
        var data={
            "id_sede": id_sede,
	        "id_usuario":0
        };
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'afiliado/sede/usuario/listar',data,{headers:headers}).map(res=>res.json());
    }

    registrarSedeUsuario(sede_usuario){
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'afiliado/sede/usuario/registrar',sede_usuario,{headers:headers}).map(res=>res.json());
    }

    listarAfiliados(id){
        var data={
            "id_afiliado":id
        };
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'afiliado/listar',data,{headers:headers}).map(res=>res.json());
    }
}