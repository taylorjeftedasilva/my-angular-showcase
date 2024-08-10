import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListCaroselCardsModel } from '../models/section-carosel-models/card-model'

@Injectable({
  providedIn: 'root'
})
export class CaroselsItensService {

  private apiUrl = 'http://localhost:3000/carosels';

  constructor(private http: HttpClient) {}

  getCarouselCards(): Observable<ListCaroselCardsModel> {
    return this.http.get<ListCaroselCardsModel>(this.apiUrl);
  }
}
