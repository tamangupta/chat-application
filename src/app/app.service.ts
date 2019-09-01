import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "https://chatapi.edwisor.com";

  constructor(public http: HttpClient, private cookie: CookieService) { }

  public getUserInfoInLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  } // end of getuserinfolocalstorage

  public setUserInfoInLocalStorage = (data: any) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }// end of setUserInfoInLocalStorage

  public signupFunction(data: { firstName: any; lastName: any; email: any; mobileNumber: any; password: any; apiKey: any; }): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('email', data.email)
      .set('mobileNumber', data.mobileNumber)
      .set('password', data.password)
      .set('apiKey', data.apiKey)

    return this.http.post(`${this.url}/api/v1/users/signup`, params);
  } // end of sign up function

  public signinFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password)

    return this.http.post(`${this.url}/api/v1/users/login`, params);
  } // end of sign in function

  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', this.cookie.get('authtoken'))

    return this.http.post(`${this.url}/api/v1/users/logout`, params);

  } // end logout function

  

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError



}

