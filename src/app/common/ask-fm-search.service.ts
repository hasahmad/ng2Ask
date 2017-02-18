import { Injectable } from '@angular/core';
import { Http,Response }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {AskFM}           from './ask-fm';

@Injectable()
export class AskFMSearchService {

  private askSearchUrl = 'https://api.ahmadhas.com/api/v1/ask-fm/s/';

  constructor(private http: Http) {}

  search(term: string): Observable<AskFM[]> {

    return this.http
      .get(`${this.askSearchUrl}${term}`)
      .map((res: Response) => res.json().data as AskFM[]);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
