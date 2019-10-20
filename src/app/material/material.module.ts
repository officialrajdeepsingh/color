import { NgModule } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




const materialComponentfor= [
  MatTooltipModule,
  MatSliderModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule

];



@NgModule({
  imports: [materialComponentfor],
  exports:[materialComponentfor]
})
export class MaterialModule { }
