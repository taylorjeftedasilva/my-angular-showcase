import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ListCaroselCardsModel } from '../models/section-carosel-models/card-model'
import { catchError, map } from 'rxjs/operators';
import { Success, Failure } from 'src/app/shared/Result';

export type ResponseError = Failure<HttpErrorResponse>;
export type ResponseSucess = Success<ListCaroselCardsModel>;
export type ReponseResultCarosels = ResponseSucess | ResponseError;

@Injectable({
  providedIn: 'root'
})
export class CaroselsItensService {

  private apiUrl = 'http://localhost:3000/carosels';

  constructor(private http: HttpClient) {}

  getCarouselCards(): Observable<ReponseResultCarosels> {
    return this.http.get<ListCaroselCardsModel>(this.apiUrl).pipe(
      map((response) =>  this.handleSuccess(response)),
      catchError((error) => this.handleError(error))
    );
  }

  private handleSuccess(result: ListCaroselCardsModel): ResponseSucess {
    return new Success<ListCaroselCardsModel>(result);
  }

  private handleError(error: HttpErrorResponse): Observable<ResponseError> {
    const failure = new Failure<HttpErrorResponse>(error);
    return of(failure);
  }
}
