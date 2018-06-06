import { Directive, ElementRef, Input } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Directive({
  selector: '[priorityNum]'
})
export class PriorityDirective {

  
  constructor(private elementRef: ElementRef) {}
  
  @Input() priorityNum: string;
  ngOnInit() {
    console.log('priorityNum: ', this.priorityNum);
    if (this.priorityNum === '2') {
      this.elementRef.nativeElement.style.color = 'orange';
    } else if (this.priorityNum === '3') {
      this.elementRef.nativeElement.style.color = 'tomato';
    }
  }
}
