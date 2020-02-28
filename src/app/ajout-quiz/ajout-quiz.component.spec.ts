import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutQuizComponent } from './ajout-quiz.component';

describe('AjoutQuizComponent', () => {
  let component: AjoutQuizComponent;
  let fixture: ComponentFixture<AjoutQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
