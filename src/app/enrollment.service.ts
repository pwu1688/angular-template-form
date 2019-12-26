import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "./user";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EnrollmentService {
  url = "http://localhost:3000/enroll";
  constructor(private _http: HttpClient) {}

  enroll(user: User): Observable<any> {
    return this._http
      .post<any>(this.url, user)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}