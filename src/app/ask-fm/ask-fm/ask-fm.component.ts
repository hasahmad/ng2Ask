import { Component, OnInit, NgZone } from '@angular/core';
import { Router }            from '@angular/router';

import {AskFM} from '../../common/ask-fm';
import {AskFmService} from '../../common/ask-fm.service';
import {PouchdbService} from '../../common/pouchdb.service';

@Component({
  selector: 'app-ask-fm',
  templateUrl: './ask-fm.component.html',
  styleUrls: ['./ask-fm.component.css']
})
export class AskFmComponent implements OnInit {

  public asks = [];
  public selectedAsk: AskFM;
  public _total: any;
  public _perPage: any;

  ngOnInit() {
    this.loadData(1);
  }
  constructor(private _askService:AskFmService,
              private router: Router,
              private database: PouchdbService, 
              private zone: NgZone) {}

  loadData(event) {
    this._askService.getData(event).subscribe(
      (res: any) => {
        this._total = res.total;
        this._perPage = res.per_page;

        this.asks = res.data;
      },
      (err: any) => {
        console.log('Server error', err);
      }
    );

    return event;
  }

  onSelect(ask: AskFM): void {
    this.selectedAsk = ask;
  }

  gotoDetail(): void {
    this.router.navigate(['/ask-fm/detail', this.selectedAsk.id]);
  }

}
