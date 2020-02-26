import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newTestApp';

  data = [
    { value: 10, name:'India', checked: true },
    { value: 15, name:'USA', checked: true },
    { value: 20, name:'Germany', checked: false },
    { value: 43, name:'Italy', checked: true },
    { value: 50, name:'West', checked: true },
    { value: 35, name:'East', checked: true },
    { value: 20, name:'North', checked: false },
    { value: 23, name:'South', checked: true }
  ];

  checkboxToggled ( event ){

    console.log ( event );
  }
}
