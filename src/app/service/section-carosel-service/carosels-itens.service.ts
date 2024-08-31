import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceToDoRequest, Response, ResponseError } from 'src/app/shared/ToDoRequest';
import { ListCaroselCardsModel } from './models/card-model';


@Injectable()
export class CaroselsItensService {

  private apiUrl = 'http://localhost:3000/carosels';

  constructor(private service: ServiceToDoRequest) {}

  getCarouselCards(): Observable<Response<ListCaroselCardsModel>> {
    return this.service.toDoRequest<ListCaroselCardsModel>(this.apiUrl);
  }
}
