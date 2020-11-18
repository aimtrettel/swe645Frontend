import { Injectable } from '@angular/core';
import { stuBean } from './studentBean';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDAOService {

  REST_API: string = 'http://localhost:8080/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  AddSurvey(data, likes): Observable<any> {
    let API_URL = `${this.REST_API}/surveys`;
    let likesList = "";
    for(let i = 0; i < likes.length; i++) {
      if(i == 0) {likesList = likes[i]}
      else {likesList = likesList.concat(" & " + likes[i])}
    }
    let values = {
      sid: data.sid, fname:data.fname, lname: data.lname, address: data.address, city: data.city, state: data.state,
      zip: data.zip, phone: data.phone, email: data.email, date: data.date, likes: likesList, interested: data.interested,
      rating: data.rating
    };
    return this.httpClient.post(API_URL, values)
      .pipe(
        catchError(this.handleError)
      )
  }

  GetSurveys() {
    return this.httpClient.get(`${this.REST_API}/surveys`);
  }

  GetSurvey(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/surveys/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
