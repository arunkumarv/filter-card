# Filter Card
Filter card is useful in implementing a search results sidebar filter. It is on early stage. Will update on freetime.
![time](./src/assets/screenshot.png)
```javascript
  data = [
    { value: 10, name:'India', checked: true },
    { value: 15, name:'USA', checked: true },
    { value: 20, name:'Germany', checked: false },
    { value: 43, name:'Italy', checked: true },
  ];
  
  checkboxToggled ( event ){
    // This will print an array of the checked names
    console.log ( event );
  }
```
```html
<filter-card 
  [data]="data" 
  (toggled)="checkboxToggled ($event)">
</filter-card>
```

Compiled using Angular 8.3.22.

