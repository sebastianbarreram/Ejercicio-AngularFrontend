import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports:[
    MatToolbarModule,
  ]
})
export class SharedModule { }
