import { Component, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Patienten } from '../app/models/Patienten/patienten.model';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'erfassungsprogramm';

  constructor() {
    this.checkInit();
  }

  public printshow = false;
  public hideprintbuttons = false;

  p1: string | undefined;
  p2: string | undefined;
  p3: string | undefined;
  p4: string | undefined;
  w: number | undefined;

  patimp: Patienten[] = [];

  checkInit() {
    if(!(this.tI(this.rd("write")!)>=0)) {
      this.wr("write", "0");
    }
  }

  wr(p1:string, p2:string) {
    localStorage.setItem(p1,p2);
  }

  rd(p1:string) {
    return localStorage.getItem(p1);
  }

  tS(pN:number) {
    return pN.toString();
  }

  tI(pS:string) {
    return parseInt(pS);
  }

  command() {
    let cmd = prompt("Befehl eingeben:");

    if(cmd == "init") {
      this.w=0;
      this.wr("write", this.w!.toString());
    } else if (cmd == "clear") {
      localStorage.clear();
      this.w=0;
      this.wr("write", this.w!.toString());
    } else if(cmd == "test") {
      
    }
  }

  response(pvname:string,pnname:string,ptot:string) {
    let wS = this.rd("write");
    pvname = pvname+"*";
    pnname = pnname+"*";
    ptot = ptot+"*";
    let fDate = new Date();
    let month = fDate.getUTCMonth() + 1;
    let day = fDate.getUTCDate();
    let year = fDate.getUTCFullYear();
    let curDate = day + "." + month + "." + year + "*";
    this.wr(wS!, pvname+pnname+curDate+ptot);
    this.w = parseInt(wS!);
    this.w!++;
    this.wr("write", this.w!.toString());
    let vname = (<HTMLInputElement>document.getElementById("vname"));
    let nname = (<HTMLInputElement>document.getElementById("nname"));
    let tot = (<HTMLInputElement>document.getElementById("time"));
    vname!.value = "Vorname";
    nname!.value = "Nachname";
    tot!.value = "";
    vname.select();
  }

  hideprint() {
    this.printshow = false;
    this.patimp = [];
  }

  printwindow() {
    this.hideprintbuttons = true;
    setTimeout(window.print, 100);
  }

  writePatient(indexs: string, c1: string, c2:string, c3: string, c4: string) {
    this.patimp.push(new Patienten(indexs,c1,c2,c3,c4));
  }

  readPatients() {
    for(let i=0; i<this.patimp.length; i++) {
      
    }
  }

  orderDate(pDate:string) {
    let year = pDate.slice(0,4);
    let month = pDate.slice(5,7);
    let day = pDate.slice(8,10);
    //let fDate = day + "." + month + "." + year;
    //alert(fDate);
    alert(this.tI(year)+1);
  }

  print2() {
    this.printshow = true;
    this.hideprintbuttons = false;
    for(let h=0; h<localStorage.length; h++) {
      let value = this.rd(h.toString());
      let j = 0;
      let k = 0;
      for(let i=0; i<value!.length; i++) {
        if(value![i]=="*") {
          if(k == 0) {
            this.p1 = value!.slice(j, i);
          } else if (k == 1) {
            this.p2 = value!.slice(j+1, i);
          } else if (k == 2) {
            this.p3 = value!.slice(j+1, i);
          } else if (k == 3) {
            this.p4 = value!.slice(j+1, i);
          }
          j = i;
          k++;
        }
      }
      //this.readPatients();
      this.writePatient(this.tS(h), this.p1!, this.p2!, this.p3!, this.p4!);
    }
  }
}