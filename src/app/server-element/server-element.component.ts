import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { name: string, type: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() {
    console.log('constructor was called');
  }


  ngOnInit(): void {
    console.log('ngOnInit() was called');
    if (this.paragraph == undefined) {
      console.log("Paragraph at this point is undefined")
    } else {
      console.log('textContent: ' + this.header.nativeElement.textContent);
    }
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
    console.log('Paragraph textContent: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() was called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() was called');
    console.log('textContent: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() was called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() was called');
  }


}
