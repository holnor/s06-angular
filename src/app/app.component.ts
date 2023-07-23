import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name: 'Test server', type: 'server', content: 'test content'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  elapsedTime = 0;



  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeLast() {
    this.serverElements[this.serverElements.length - 1].name = 'Changed'

  }

  onDestroyLast() {
    this.serverElements.pop();
  }

  onIntervalFired(firedNumber: number) {
    console.log('firedNuber is: ' + firedNumber)
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    } else{
      this.oddNumbers.push(firedNumber);
    }
    console.log(this.evenNumbers)
    console.log(this.oddNumbers)
  }

  onTimeEmitted(time: number) {
    this.elapsedTime = time;
    console.log(time)
  }
}
