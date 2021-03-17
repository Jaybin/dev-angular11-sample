import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { DocumentsComponent } from "./documents.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: DocumentsComponent
      }
    ])
  ],
  declarations: [
    DocumentsComponent
  ]
})
export class DocumentsModule {}