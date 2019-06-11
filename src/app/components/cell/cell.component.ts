import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() text: string;     // text string from address book

  @Input() update: (text: string) => void;   // update call back for update address book

  @ViewChild('textInput', {static: false}) textInputElement: ElementRef;

  editMode = false;

  constructor() { }

  ngOnInit() {

  }

  enterEditMode() {
    this.editMode = true;

    // focus on the input automatically
    setTimeout(() => {
      this.textInputElement.nativeElement.focus();
    }, 0);

  }

  leaveEditMode(text: string) {
    this.editMode = false;

    this.update(text);
  }

}
