import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';

import { AskFmComponent } from './ask-fm/ask-fm.component';
import {AskRoutingModule} from './ask.routing';
import {CommonModule} from '../common/common.module';
import {AskSearchComponent} from "./ask-search/ask-search.component";
import {AskDetailComponent} from "./ask-detail/ask-detail.component";


@NgModule({
  declarations: [AskFmComponent, AskSearchComponent, AskDetailComponent],
  imports: [BrowserModule, FormsModule, CommonModule, AskRoutingModule, Ng2PaginationModule]
})
export class AskModule { }
