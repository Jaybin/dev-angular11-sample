import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PrimeNgModule } from "../primeng/primeng.module";
import { CustomTableComponent } from './custom-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule
  ],
  exports: [
    CustomTableComponent
  ],
  declarations: [
    CustomTableComponent
  ]
})
export class CustomTableModule {}