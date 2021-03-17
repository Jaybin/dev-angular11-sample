import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { PlansComponent } from "./plans.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: PlansComponent
      }
    ])
  ],
  declarations: [
    PlansComponent
  ],
  exports: [
    PlansComponent
  ]
})
export class PlansModule {}