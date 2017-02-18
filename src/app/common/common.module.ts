import { NgModule } from '@angular/core';

import {RestApiService} from './restapi.service';
import {AskFmService} from './ask-fm.service';
import {AskFMSearchService} from "./ask-fm-search.service";
import {AskIslamService} from './ask-islam.service';
import {AskIslamSearchService} from "./ask-islam-search.service";

@NgModule({
  providers: [RestApiService, AskFmService, AskFMSearchService, AskIslamService, AskIslamSearchService]
})

export class CommonModule {}
