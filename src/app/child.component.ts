import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
  selector: 'child',
  template: `
    <div>
      Child component:
     <span>Amount available: {{amount}}</span>
     <button (click)="withdraw()">Withdraw 100 </button>
    </div>
  `,
})
export class ChildComponent{
  @Input() amount: number;
  @Output() amountChange = new EventEmitter();
  
  withdraw(){
    this.amount -= 100;
    this.amountChange.emit(this.amount);
  }
}