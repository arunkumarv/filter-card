import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.css']
})
export class FilterCardComponent implements OnInit {

  @Input() data;

  @Output() toggled: EventEmitter<any>;

  
  constructor() {
    this.toggled = new EventEmitter<any>();
  }

  ngOnInit() {}

  checkBoxChanged () {

    this.toggled.emit ( this.data.filter ( ele => ele.checked  ).map ( ele => ele.name ) );
  }

  barClicked(ele){

    ele.checked=!ele.checked
    
    this.checkBoxChanged()
  }

}
