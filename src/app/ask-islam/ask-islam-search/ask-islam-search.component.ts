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

import {AskIslamSearchService} from '../../common/ask-islam-search.service';
import {AskIslam} from '../../common/ask-islam';


@Component({
  moduleId: module.id,
  selector: 'app-ask-islam-search',
  templateUrl: './ask-islam-search.component.html',
  styleUrls: ['./ask-islam-search.component.css']
})
export class AskIslamSearchComponent implements OnInit {
	asks: Observable<AskIslam[]>;
  private searchTerms = new Subject<string>();

  constructor(private _askSearchService:AskIslamSearchService,
              private router: Router) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.asks = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this._askSearchService.search(term)
        : Observable.of<AskIslam[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<AskIslam[]>([]);
      });
  }

  gotoDetail(ask: AskIslam): void {
    let link = ['/ask-islam/detail', ask.id];
    this.router.navigate(link);
  }

}
