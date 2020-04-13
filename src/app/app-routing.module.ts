import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {UsersearchComponent} from './usersearch/usersearch.component';

const routes: Routes = [
  {path:'home', component:SearchComponent},
  {path: 'search', component:UsersearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
