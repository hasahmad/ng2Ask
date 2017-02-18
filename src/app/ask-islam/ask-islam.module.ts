import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';

import { AskIslamComponent } from './ask-islam/ask-islam.component';
import {AskIslamRoutingModule} from './ask-islam.routing';
import {CommonModule} from '../common/common.module';
import {AskIslamSearchComponent} from "./ask-islam-search/ask-islam-search.component";
import {AskIslamDetailComponent} from "./ask-islam-detail/ask-islam-detail.component";


@NgModule({
  declarations: [AskIslamComponent, AskIslamSearchComponent, AskIslamDetailComponent],
  imports: [BrowserModule, FormsModule, CommonModule, AskIslamRoutingModule, Ng2PaginationModule]
})
export class AskIslamModule { }
