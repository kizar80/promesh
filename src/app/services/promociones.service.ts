import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

    public url: String = '';
    public identity;
    public token='';
    constructor(
      private _http: Http
      ) {
      this.url = GLOBAL.url;
      this.token='Bearer '+localStorage.getItem('token');
    }

    listarCategorias(){
        const headers = new Headers({ 
            'Content-Type': 'application/json'
        });
        return this._http.get(this.url+'oferta/listar-categoria',{headers:headers}).map(res=>res.json());
    }

    insertarOfertas(oferta){
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'oferta/registrar',oferta,{headers:headers}).map(res=>res.json());
    }
    insertarSedeOferta(sedeOferta){
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'oferta/resgistrar-sede-oferta',sedeOferta,{headers:headers}).map(res=>res.json());
    }
}