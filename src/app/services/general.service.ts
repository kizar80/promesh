import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

    public url: String = '';
    public identity;
    public token='';
    constructor(
      private _http: Http
      ) {
      this.url = GLOBAL.url;
      this.token='Bearer '+localStorage.getItem('token');
    }

    listarDepartamentos(){
        var data={
            "codigo_departamento":"0"
        }
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'localidad/departamento',data,{headers:headers}).map(res=>res.json());
    }

    listarProvincias(cod_departamento){
        var data={
            "codigo_departamento":cod_departamento,
            "codigo_provincia":"0"
        }
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'localidad/provincia',data,{headers:headers}).map(res=>res.json());
    }

    listarDistritos(cod_provincia){
        var data={
            "codigo_provincia":cod_provincia,
            "codigo_distrito":"0"
        }
        const headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': this.token,
        });
        return this._http.post(this.url+'localidad/distrito',data,{headers:headers}).map(res=>res.json());
    }

}