import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ListCaroselCardsModel } from './model/card-model';
import { CaroselsItensService } from '../../service/carosels-itens.service';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-section-carosel',
  templateUrl: './section-carosel.component.html',
  styleUrls: ['./section-carosel.component.css']
})
export class SectionCaroselComponent implements OnInit, AfterViewChecked  {

  listCards$?: Observable<ListCaroselCardsModel>;
  private listCards?: ListCaroselCardsModel;

  private viewChecked = false;

  constructor(private service: CaroselsItensService, private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.checkListCardHaveBeenPolulate()
  }

  ngOnInit(): void {
    this.toDoRequest()
  }

  private checkListCardHaveBeenPolulate() {
    if ((this.listCards?.carosels.length ?? 0) > 0 && !this.viewChecked) {
      this.viewChecked = true
      this.loadCaroseHTML();
    }
  }

  private toDoRequest(): void{
    this.listCards$ = this.service.getCarouselCards();
    this.listCards$.subscribe(data => {
      this.listCards = data
    })
  }

  private loadCaroseHTML(): void {
    setTimeout(() => {
    $('.carousel').slick(
      {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1324,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
  }, 100)
  }
}