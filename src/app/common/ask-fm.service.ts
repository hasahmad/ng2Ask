import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import {Ask} from "./ask";

@Injectable()
export class AskFmService {

  private baseAskUrl = 'https://api.ahmadhas.com/api/v1/';

  constructor(private _http:Http) { }

  getData(page: number): Observable<Ask[]> {

    return this._http.get(`${this.baseAskUrl}ask?page=${page}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getAsk(id: number): Observable<Ask> {
    const url = `${this.baseAskUrl}ask/${id}`;

    return this._http.get(url)
      .map((response: any) => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }

}
