import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  oddNumber: number[] = [];
  evenNumber: number[] = [];
  value = 5;

  onIntervalFired (firedNumber: number) {
    if(firedNumber % 2 === 0){
      this.evenNumber.push(firedNumber)
    }else{
      this.oddNumber.push(firedNumber)
    }
  }

}
