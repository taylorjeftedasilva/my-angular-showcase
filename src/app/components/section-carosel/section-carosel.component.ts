import { Component, OnInit, AfterViewChecked, EventEmitter, AfterViewInit } from '@angular/core';
import { SectionCaroselViewModel } from './viewModel/section-carosel-view-model';
import { ListCaroselCardsModel } from './model/card-model';

@Component({
  selector: 'app-section-carosel',
  templateUrl: './section-carosel.component.html',
  styleUrls: ['./section-carosel.component.css']
})
export class SectionCaroselComponent implements OnInit  {

  protected listCards?: ListCaroselCardsModel;

  constructor(private viewModel: SectionCaroselViewModel) {}

  ngOnInit(): void {
    this.viewModel.toDoRequest()
    this.registerBindables()
  }

  private registerBindables() {

    // Caso o retorno seja um cenário de sucesso

    this.viewModel.listCards?.subscribe( result => {
      this.listCards = result.success
      this.checkListCardHaveBeenPolulate(result.success)
    })

    // Manipula cenário de erro

    this.viewModel.error?.subscribe( error => {
      console.log(error)
    }
    );
  } 

  private checkListCardHaveBeenPolulate(data: ListCaroselCardsModel): void {
    if (data.carosels.length > 0) {
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
