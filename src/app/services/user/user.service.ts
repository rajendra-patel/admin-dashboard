import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:4000/api/users";

  constructor(private http: HttpClient) { }

  register(regLoginData){
    let jsonLoginData = JSON.stringify(regLoginData);
    console.log(jsonLoginData);
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.post("http://localhost:4000/api/register-user", jsonLoginData, { headers: getHeaders })
      .pipe(catchError(this.errorHandler));
  }
  getAllUsers(){
    let token = localStorage.getItem("token");
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get("http://localhost:4000/api/users", { headers: getHeaders })
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  updateUser(user){
    let token = localStorage.getItem("token");
    // let jsonCompanyData = JSON.stringify(companyData);
    // console.log(jsonCompanyData);
    const params: HttpParams = new HttpParams().set('id', user._id);
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put("http://localhost:4000/api/update/user", { headers: getHeaders, params: params })
      .pipe(catchError(this.errorHandler));
  }

  deleteUser(user){
    let url = "http://localhost:4000/api/delete/user";
    let token = localStorage.getItem("token");
    // let jsonCompanyData = JSON.stringify(companyData);
    const params: HttpParams = new HttpParams().set('id', user._id);

    // console.log(jsonCompanyData);
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.delete(url, { headers: getHeaders, params: params })
      .pipe(catchError(this.errorHandler));
  }
}
