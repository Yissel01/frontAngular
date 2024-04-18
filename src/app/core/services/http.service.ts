import { HttpClient,HttpHeaders , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, VerifyUser, Results } from '../interfaces/user';
import { FormGroup } from '@angular/forms';
import { __param } from 'tslib';
import { WebsiteTable} from '../interfaces/website';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://apit.v/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  verifyUser(data: User): Observable<VerifyUser>{
    console.log('desde el servise: ',data);
    return this.http.post<VerifyUser>(this.url + '/verify', data);
  }

  getWebsitesTable(): Observable<WebsiteTable> {

    console.log('hola');
    const parame = sessionStorage.getItem('auth_token');
    console.log('desde el servise gettable: '+parame);
    if(parame){
      const headers = new HttpHeaders({
        'Authorization': parame
      });
      return this.http.get<WebsiteTable>(this.url + '/website', {headers});
      // return this.http.get<WebsiteTable>(this.url + '/website', {params: {token : parame}});
    }
    return this.http.get<WebsiteTable>(this.url + '/website');
  }

  logout(): Observable<Results>{
    sessionStorage.removeItem('auth_token');
    // sessionStorage.clear();
    return this.http.get<Results>(this.url + '/logout');
  }
}
