import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    ButtonModule,
    RippleModule,
    TableModule,
    BreadcrumbModule,
    CardModule,
    TooltipModule
  ],
  exports: [
    ButtonModule,
    RippleModule,
    TableModule,
    BreadcrumbModule,
    CardModule,
    TooltipModule
  ]
})
export class PrimeNgModule {}