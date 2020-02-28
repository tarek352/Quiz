import { TestBed } from '@angular/core/testing';

import { AfficherQuizService } from './afficher-quiz.service';

describe('AfficherQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfficherQuizService = TestBed.get(AfficherQuizService);
    expect(service).toBeTruthy();
  });
});
