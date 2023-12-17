import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-ngfor',
  templateUrl: './ngif-ngfor.component.html',
  styleUrl: './ngif-ngfor.component.css'
})
export class NgIfNgforComponent {
  myNumber!: number;

  setMyNumber(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.myNumber = value;
  }

  arrNumeros = ['Valter', 'Alessandro', 'Almeida'];
  constructor() {}
}
