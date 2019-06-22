import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

    public url: String = '';
    public identity;
    public token='';
    constructor(
      private _http: Http
      ) { 
      this.url = GLOBAL.url;
      this.token='Bearer '+localStorage.getItem('token');
    }

    listarVendedores(){
        var data={
            "id_punto_venta":0
        }
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'punto-venta/listar',data,{headers:headers}).map(res=>res.json());
    }
    registrarPuntoVenta(punto_venta){
      const headers = new Headers({ 
          'Content-Type': 'application/json',
          'Authorization': this.token,
      });
      return this._http.post(this.url+'punto-venta/registrar',punto_venta,{headers:headers}).map(res=>res.json());
  }
}