import { Component, Inject, OnInit } from '@angular/core';
import { CardModel } from '../section-carosel/viewModel/model/card-model';
import { ActivatedRoute } from '@angular/router';
import {DescriptionViewModel } from './viewModel/Description-view-model';
import { take } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  protected cardDescription?: CardModel

  constructor(private activatedRouter: ActivatedRoute, private viewModel: DescriptionViewModel) {}

  ngOnInit(): void {
    this.toDoRequest();  
    this.subscribeVariablesViewModel();
  }

  private toDoRequest(): void {
    this.viewModel.toDoRequest(this.activatedRouter);
  }

  private subscribeVariablesViewModel() {
    this.viewModel.cards?.pipe(take(1)).subscribe( response => {
      this.cardDescription = response
    })
  }

}
