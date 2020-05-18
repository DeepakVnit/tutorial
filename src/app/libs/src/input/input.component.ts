import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input()
  myvalue: string = 'oldvalue';

  @Output()
  readonly myvalueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.myvalue = event.target.value;
    this.myvalueChange.emit(this.myvalue);
  }

}
