import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AskIslamComponent} from './ask-islam/ask-islam.component';
import {AskIslamDetailComponent} from "./ask-islam-detail/ask-islam-detail.component";

const routes: Routes = [
  {path: 'ask-islam', component: AskIslamComponent},
  {path: 'ask-islam/detail/:id', component: AskIslamDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AskIslamRoutingModule { }
