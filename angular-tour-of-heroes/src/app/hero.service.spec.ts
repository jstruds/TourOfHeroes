import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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

  
  it('test test', () => {
    let test = service.testmethod();
    
    expect(test == "test").toBeTruthy();
  });

});
