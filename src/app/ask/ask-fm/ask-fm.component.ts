import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import {Ask} from '../../common/ask';
import {AskFmService} from '../../common/ask-fm.service';

@Component({
  selector: 'app-ask-fm',
  templateUrl: './ask-fm.component.html',
  styleUrls: ['./ask-fm.component.css']
})
export class AskFmComponent implements OnInit {

  public asks = [];
  public selectedAsk: Ask;
  public _total: any;
  public _perPage: any;

  ngOnInit() {
    this.loadData(1);
  }
  constructor(private _askService:AskFmService,
              private router: Router) {}

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

  onSelect(ask: Ask): void {
    this.selectedAsk = ask;
  }

  gotoDetail(): void {
    this.router.navigate(['/ask/detail', this.selectedAsk.id]);
  }

}
