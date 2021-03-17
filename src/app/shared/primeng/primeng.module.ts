import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  imports: [
    ButtonModule,
    RippleModule,
    TableModule,
    BreadcrumbModule,
    CardModule,
    TooltipModule,
    BadgeModule
  ],
  exports: [
    ButtonModule,
    RippleModule,
    TableModule,
    BreadcrumbModule,
    CardModule,
    TooltipModule,
    BadgeModule
  ]
})
export class PrimeNgModule {}