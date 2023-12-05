import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.css'
})
export class GamecontrolComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0
  onStartGame () {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1)
      this.lastNumber++
    }, 1000)
  }

  onPauseGame () {
    clearInterval(this.interval)
  }
}
