import { Injectable } from '@angular/core';
import { Http,Response }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {AskIslam}           from './ask-islam';

@Injectable()
export class AskIslamSearchService {

  private askIslamSearchUrl = 'https://api.ahmadhas.com/api/v1/ask-islam/s/';

  constructor(private http: Http) {}

  search(term: string): Observable<AskIslam[]> {

    return this.http
      .get(`${this.askIslamSearchUrl}${term}`)
      .map((res: Response) => res.json().data as AskIslam[]);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
