import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Images } from '../../models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  images: any;
  erro: any;

  constructor(private crudService: CrudService) {
    this.getter()
  }

  getter() {
    this.crudService.getFotos().subscribe((data: Images) => {
      this.images = data;
      console.log("Os dados que recebemos", data);
      console.log("A variável que preechemos", this.images);
      
    }, (error: any) => {
      this.erro = error;
      console.error("ERROR: ", error);
    })
  }

}
