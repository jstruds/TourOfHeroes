import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hero } from './hero';


describe('HeroService', () => {
  let heroservice: HeroService;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HeroService
      ]
    });
    heroservice = TestBed.inject(HeroService);
    
  });

  it('should be created', () => {
    expect(heroservice).toBeTruthy();
  });
});
