import { NgModule } from "@angular/core";
import { PrimeNgModule } from "./primeng/primeng.module";
import { CommonModule } from "@angular/common";
import { CustomTableModule } from "./custom-table/custom-table.module";

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule,
    CustomTableModule
  ],
  exports: [
    CommonModule,
    PrimeNgModule,
    CustomTableModule
  ],
  declarations: []
})
export class SharedModule {}