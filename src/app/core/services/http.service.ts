import { HttpClient,HttpHeaders , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, VerifyUser, Results } from '../interfaces/user';
import { FormGroup } from '@angular/forms';
import { __param } from 'tslib';
import { WebsiteTable, WebsiteVerification, checkWebsite} from '../interfaces/website';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://apit.v/api';

  constructor(private http: HttpClient) { }

  verifyUser(data: User): Observable<VerifyUser>{
    return this.http.post<VerifyUser>(this.url + '/verify_credencials', data);
  }

  getWebsitesTable(): Observable<WebsiteTable> {
    const token = sessionStorage.getItem('auth_token');
    if(token){
      const headers = new HttpHeaders({
        'Authorization': token
      });
      return this.http.get<WebsiteTable>(this.url + '/website', {headers});
    }
    return this.http.get<WebsiteTable>(this.url + '/website');
  }

  getToken(){
    return sessionStorage.getItem('auth_token');
  }

  getWebsiteVerification(id: string): Observable<WebsiteVerification> {
    const token = sessionStorage.getItem('auth_token');
    if(token){
      const headers = new HttpHeaders({
        'Authorization': token,
        'userWebsiteID': id
      });
      console.log(headers.getAll('userWebsiteID'));
      return this.http.get<WebsiteVerification> (this.url + '/website_verification_codes', {headers});
    }
    return this.http.get<WebsiteVerification>(this.url + '/website');
  }

  checkWebsite(id: string, url:string): Observable<checkWebsite>{
    const token = sessionStorage.getItem('auth_token');
    if(token){
      const headers = new HttpHeaders({
        'Authorization': token,
        'userWebsiteID': id,
        'Website_url' : url
      });
      return this.http.get<checkWebsite> (this.url + '/check_website', {headers});
    }
    return this.http.get<checkWebsite>(this.url + '/website');
  }

//de momento en desusuo
  logout(): Observable<Results>{
    sessionStorage.removeItem('auth_token');
    sessionStorage.clear();
    return this.http.get<Results>(this.url + '/logout');
  }
}
