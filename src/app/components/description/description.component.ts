import { Component, OnInit } from '@angular/core';
import { CardModel } from '../section-carosel/viewModel/model/card-model';
import { ActivatedRoute } from '@angular/router';
import {DescriptionViewModel } from './viewModel/Description-view-model';
import { take } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./css/description.component.css', './css/description.component.injectable.css' ]
})
export class DescriptionComponent implements OnInit {

  protected cardDescription?: CardModel;

  constructor(private activatedRouter: ActivatedRoute,
    private viewModel: DescriptionViewModel,
    private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.toDoRequest();  
    this.subscribeVariablesViewModel();
  }

  private toDoRequest(): void {
    this.viewModel.toDoRequest(this.activatedRouter);
  }

  private subscribeVariablesViewModel() {
    this.viewModel.cards?.pipe(take(1)).subscribe( response => {
      setTimeout(() => {
        this.cardDescription = response
      },300);
     
    })
  }

  protected sanitizerTransform(htmlFont: string) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlFont);
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

}
