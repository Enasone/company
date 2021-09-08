import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SummaryPageComponent} from "./modules/summary-page/summary-page.component";

const routes: Routes = [
  {path: '', component: SummaryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
