import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour Of Heroes';
  selectedIndex: number  = -1;
  onChipSelect(id: number): void {
    this.selectedIndex = id;
  }

}
