import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import  { HeroService } from '../hero.service';
import { MessageService } from 'app/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  getHeroes(): void  {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  onItemSelect(hero: Hero): void {
    console.log(hero);
  }


}
