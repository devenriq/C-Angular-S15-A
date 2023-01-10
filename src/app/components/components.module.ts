import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarComponent } from './mostrar/mostrar.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MostrarComponent,
    TwoWayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MostrarComponent,
    TwoWayComponent
  ]
})
export class ComponentsModule { }
