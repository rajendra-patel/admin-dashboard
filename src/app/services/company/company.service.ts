import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = "http://localhost:4000/api/company";

  constructor(private http: HttpClient) { }

  registerCompany(companyData){
    let token = localStorage.getItem("token");
    let jsonCompanyData = JSON.stringify(companyData);
    console.log(jsonCompanyData);
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post("http://localhost:4000/api/register-company", jsonCompanyData, { headers: getHeaders })
      .pipe(catchError(this.errorHandler));
  }

  getAllCompanies(){
    let token = localStorage.getItem("token");
    // let jsonCompanyData = JSON.stringify(companyData);
    // console.log(jsonCompanyData);
    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get("http://localhost:4000/api/companies", { headers: getHeaders })
      .pipe(catchError(this.errorHandler));
  }

  updateCompany(company){
    let token = localStorage.getItem("token");
    // let jsonCompanyData = JSON.stringify(companyData);
    // console.log(jsonCompanyData);
    const params: HttpParams = new HttpParams().set('id', company.company_id);

    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put("http://localhost:4000/api/update/company", { headers: getHeaders, params: params })
      .pipe(catchError(this.errorHandler));
  }

  deleteCompany(company){
    let token = localStorage.getItem("token");
    // let jsonCompanyData = JSON.stringify(companyData);
    // console.log(jsonCompanyData);
    const params: HttpParams = new HttpParams().set('id', company.company_id);

    const getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.delete("http://localhost:4000/api/delete/company", { headers: getHeaders, params: params })
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
