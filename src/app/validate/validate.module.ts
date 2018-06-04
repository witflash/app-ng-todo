import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateService } from './validate.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class ValidateModule {
  isValid: boolean = true;
  singleElement: string;

  constructor(singleElement) {
    this.singleElement = singleElement;
  }

  init(allElements): ValidateModule {
    console.log('allElements: ', allElements);
    this.checkDuplicate(allElements);
    this.checkEmpty();
    return this.isValid;
  }

  checkEmpty() {
    if (this.singleElement.length === 0) {
      this.isValid = false;
      console.log('The field must contain any symbols');
      return;
    }
  }

  checkDuplicate(allElements) {
    for (let i = 0; i < allElements.length; i += 1) {
      if (this.singleElement === allElements[i].title) {
        this.isValid = false;
        console.log('This is duplicate!');
        return;
      }
    }
  }
}
