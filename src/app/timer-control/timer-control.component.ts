import {Component, EventEmitter, Output} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css']
})
export class TimerControlComponent {
  @Output() timeEmitted = new EventEmitter<number>();
  interval;
  time = 0;

  onStartTimer() {
    this.interval = setInterval(()=>{
      console.log('WTF is time? ' + this.time)
      this.time++;
      this.timeEmitted.emit(this.time);
      console.log('in timer control: ' + this.time)
    }, 1000)
  }

  onStopTimer() {
    clearInterval(this.interval);
  }
}
