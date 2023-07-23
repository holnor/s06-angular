import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() emittedNumber = new EventEmitter<number>();
  intervalId;
  number: number = 0;

  onStart() {
    this.intervalId = setInterval(() => {
      this.number++
      this.emittedNumber.emit(this.number);
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalId);
    console.log('***interval cleared***')
  }
}
