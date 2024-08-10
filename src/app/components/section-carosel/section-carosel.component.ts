import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { ListCaroselCardsModel } from './model/card-model';
import { SectionCaroselViewModel } from './viewModel/section-carosel-view-model';

@Component({
  selector: 'app-section-carosel',
  templateUrl: './section-carosel.component.html',
  styleUrls: ['./section-carosel.component.css']
})
export class SectionCaroselComponent implements OnInit  {

  listCards?: ListCaroselCardsModel;

  constructor(private viewModel: SectionCaroselViewModel) {}

  ngOnInit(): void {
    this.toDoRequestWithBaseViewModel()
  }

  private toDoRequestWithBaseViewModel() {
    this.viewModel.toDoRequest().subscribe( (data) => {
        this.listCards = data
        this.checkListCardHaveBeenPolulate(data)
      }
    )
  } 

  private checkListCardHaveBeenPolulate(listCards: ListCaroselCardsModel) {
    if ((listCards.carosels.length ?? 0) > 0) {
      this.loadCaroseHTML();
    }
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
