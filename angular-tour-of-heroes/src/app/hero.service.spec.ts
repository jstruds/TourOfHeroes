import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
