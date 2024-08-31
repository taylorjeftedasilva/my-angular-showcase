import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Failure, Success } from "./Result";
import { catchError, map, Observable, of, retry } from "rxjs";


export type ResponseError = Failure<HttpErrorResponse>;
export type ResponseSuccess<T> = Success<T>;
export type Response<T> = ResponseSuccess<T> | ResponseError;


@Injectable({
    providedIn: 'root'
})
export class ServiceToDoRequest {

    constructor(private http: HttpClient) {}

    toDoRequest<T>(url: string): Observable<Response<T>> {
        this.validateURL(url)
        return this.http.get<Response<T>>(url).pipe(
            retry(3),
            map((response) =>  this.handleSuccess<T>(response)),
            catchError((error) => this.handleError(error))
            );
    }

    private validateURL(urlString: string): void  | never {
        try {
            new URL(urlString);
        } catch (_) {
            throw new Error("URL invalida, por favor insira uma url valida.");
            
        }
    }

    private handleSuccess<T>(result: any): ResponseSuccess<T> {
        return new Success<T>(result);
    }

    private handleError(error: HttpErrorResponse): Observable<ResponseError> {
        const failure = new Failure(error);
        return of(failure);
    }
}