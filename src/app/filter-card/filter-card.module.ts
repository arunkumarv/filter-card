import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCardComponent } from './filter-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    FilterCardComponent
  ],
  declarations: [FilterCardComponent]
})
export class FilterCardModule { }
