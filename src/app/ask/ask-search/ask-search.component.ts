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

import {AskSearchService} from '../../common/ask-search.service';
import {Ask} from '../../common/ask';

@Component({
  moduleId: module.id,
  selector: 'app-ask-search',
  templateUrl: '../ask-search/ask-search.component.html',
  styleUrls: ['../ask-search/ask-fm.component.css']
})
export class AskSearchComponent implements OnInit {


  asks: Observable<Ask[]>;
  private searchTerms = new Subject<string>();

  constructor(private _askSearchService:AskSearchService,
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
        : Observable.of<Ask[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Ask[]>([]);
      });
  }

  gotoDetail(ask: Ask): void {
    let link = ['/ask/detail', ask.id];
    this.router.navigate(link);
  }

}
