import { Component, OnInit} from '@angular/core';
import { Macchina } from './macchine/macchine.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  macchine:Macchina[];

  constructor(){
    title: String = null
    this.macchine = [
      new Macchina(1, '127', 'Fiat', 1300, 110),
      new Macchina(2, 'Giulietta', 'Alfa Romeo', 4000, 180),
      new Macchina(3, 'Fiesta', 'Ford', 1600, 130),
      new Macchina(4, 'Baracca', 'Subaru', 5500, 170)
  ];
  }

  sortedVelMax(): Macchina[]{
    return this.macchine.sort((a: Macchina, b: Macchina) => a.velocitamax - b.velocitamax)
  }

  sortedPrice(): Macchina[]{
    return this.macchine.sort((a: Macchina, b: Macchina) => b.prezzo - a.prezzo)
  }
  
  ngOnInit(){}

}
