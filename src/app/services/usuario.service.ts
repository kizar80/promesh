import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: String = '';
  public identity;
  //public token=localStorage.getItem('token');
  constructor(
    private _http: Http
    ) {
    this.url = GLOBAL.url;
  }

  /*login(user_to_login) {
    
    const headers = new Headers({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this._http.post(this.url + 'usuario_admin/login', user_to_login , { headers: headers }).map(res => res.json());
  }*/

  getIdentity() {
    /*const _identity = JSON.parse(localStorage.getItem('user'));
    if (_identity !== 'undefined') {
      this.identity = _identity;
    } else {
      this.identity = null;
    }
    return this.identity;*/
  }
}
