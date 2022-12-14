import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Patienten } from '../models/Patienten/patienten.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  patienten: Patienten[] = [
  ];

  constructor() {
    this.patienten =  [
    ];
  }

  ngOnInit(): void {
  }

  public getPat() {
    ;
  }

  public sayHello () {
    alert("Hallo");
  }

  public setPat(pid:number,pnid:string,pcontent:string) {
    this.patienten =  [
    ];
  }

}
