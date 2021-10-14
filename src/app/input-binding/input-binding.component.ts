import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('firstName')name: string;
  @Input()lastName: string;
  @Input()age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      {id:1, name:"Bob", age:30},
      {id:2, name:"Edson", age:25},
      {id:3, name:"Nivaldo", age:22},
      {id:4, name:"Delfina", age:45},
    ];
   }

  ngOnInit(): void {
  }

}
