import { NgModule } from '@angular/core';

import {RestApiService} from './restapi.service';
import {AskFmService} from './ask-fm.service';
import {AskSearchService} from "./ask-search.service";

@NgModule({
  providers: [RestApiService, AskFmService, AskSearchService]
})

export class CommonModule {}
