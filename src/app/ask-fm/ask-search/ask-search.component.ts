import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Rx';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {AskFMSearchService} from '../../common/ask-fm-search.service';

import {AskFM} from '../../common/ask-fm';

@Component({
  moduleId: module.id,
  selector: 'app-ask-search',
  templateUrl: '../ask-search/ask-search.component.html',
  styleUrls: ['../ask-search/ask-fm.component.css']
})
export class AskSearchComponent implements OnInit {

  asks: Observable<AskFM[]>;
  private searchTerms = new Subject<string>();

  constructor(private _askSearchService:AskFMSearchService,
              private router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.asks = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this._askSearchService.search(term)
        : Observable.of<AskFM[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<AskFM[]>([]);
      });
      // console.log(this.asks);
  }

  gotoDetail(ask: AskFM): void {
    let link = ['/ask-fm/detail', ask.id];
    this.router.navigate(link);
  }

}
