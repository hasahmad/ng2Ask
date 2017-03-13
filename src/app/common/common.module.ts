import { NgModule } from '@angular/core';

import {AskFmService} from './ask-fm.service';
import {AskFMSearchService} from "./ask-fm-search.service";
import {AskIslamService} from './ask-islam.service';
import {AskIslamSearchService} from "./ask-islam-search.service";
import {PouchdbService} from "./pouchdb.service";

@NgModule({
  providers: [AskFmService, AskFMSearchService, AskIslamService, AskIslamSearchService, PouchdbService]
})

export class CommonModule {}
