import { TestBed } from '@angular/core/testing';

import { AjoutQuizService } from './ajout-quiz.service';

describe('AjoutQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutQuizService = TestBed.get(AjoutQuizService);
    expect(service).toBeTruthy();
  });
});
