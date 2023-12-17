import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binging',
  templateUrl: './data-binging.component.html',
  styleUrl: './data-binging.component.css'
})
export class DataBindingComponent {
  myNumber!: number | undefined;

  setMyNumber(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.myNumber = value;
  }
}
