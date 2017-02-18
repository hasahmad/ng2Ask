import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AskFmComponent} from './ask-fm/ask-fm.component';
import {AskDetailComponent} from "./ask-detail/ask-detail.component";

const routes: Routes = [
  {path: 'ask-fm', component: AskFmComponent},
  {path: 'ask-fm/detail/:id', component: AskDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AskRoutingModule { }
