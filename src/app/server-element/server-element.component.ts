import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input('srvElement') element:{name: string, type: string, content: string};
  @Input() name: string;


  constructor() {
    console.log('constructor was called');
  }



  ngOnInit(): void {
    console.log('ngOnInit() was called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() was called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() was called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() was called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() was called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() was called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() was called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() was called');
  }


}
