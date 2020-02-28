import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachQuizComponent } from './coach-quiz.component';

describe('CoachQuizComponent', () => {
  let component: CoachQuizComponent;
  let fixture: ComponentFixture<CoachQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
