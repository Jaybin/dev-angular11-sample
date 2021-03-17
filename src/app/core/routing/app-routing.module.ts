import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('src/app/features/home/home.module')
    .then(m => m.HomeModule)
  },
  { path: 'plans',
    loadChildren: () => import('src/app/features/plans/plans.module')
    .then(m => m.PlansModule)
  },
  { path: 'documents', loadChildren: () => import('src/app/features/documents/documents.module')
    .then(m => m.DocumentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}