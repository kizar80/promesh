import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
    providedIn: 'root'
  })

  export class MembresiaService{
    public url: String = '';
    public identity;
    public token='';
     tokenp='';

    //public token=localStorage.getItem('token');
    constructor(
    private _http: Http
    ) {
    this.url = GLOBAL.url;
  }

  public _headers = new Headers({ 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('token')
 });
  saveMembresia(membresia){
    
      return this._http.post(this.url + 'membresia/registrar', membresia , { headers: this._headers }).map(res => res.json());
    }

    listarMembresias(){
        var data={
            "plan_membresia":0
        }
        return this._http.post(this.url+'membresia/planes',data,{headers: this._headers}).map(res=>res.json());
    }

  }