import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SummaryPageComponent} from "./modules/summary-page/summary-page.component";
import {ListPageComponent} from "./modules/list-page/list-page.component";

const routes: Routes = [
  { path: '', component: SummaryPageComponent },
  { path: 'navigator', component: ListPageComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
