import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCaroselComponent } from './section-carosel.component';

describe('SectionCaroselComponent', () => {
  let component: SectionCaroselComponent;
  let fixture: ComponentFixture<SectionCaroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCaroselComponent]
    });
    fixture = TestBed.createComponent(SectionCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
