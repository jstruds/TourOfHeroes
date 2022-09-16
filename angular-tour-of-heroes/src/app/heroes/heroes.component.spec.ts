import { ComponentFixture, flushMicrotasks, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { Hero } from 'app/hero';
import { HeroService } from 'app/hero.service';
import { Observable, of } from 'rxjs';
describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let spy: jasmine.Spy;
  const mockheroes: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [HttpClientModule],
      providers: [HeroService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let heroService = fixture.debugElement.injector.get(HeroService);
    
    spy = spyOn(heroService, 'getHeroes').and.returnValue(of(mockheroes));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display heroes list', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.heroes-list')).toBeTruthy();
  });
  
  //Only checks whether getHeroes() in heroService has been called.
  it('should get heroes from hero service', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(spy.calls.any()).toBeTrue();
  });

});
