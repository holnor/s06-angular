import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-time',
  templateUrl: './display-time.component.html',
  styleUrls: ['./display-time.component.css']
})
export class DisplayTimeComponent {
 @Input() time: number;
}
