import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import {AskIslam} from '../../common/ask-islam';
import {AskIslamService} from '../../common/ask-islam.service';

@Component({
  selector: 'app-ask-islam',
  templateUrl: './ask-islam.component.html',
  styleUrls: ['./ask-islam.component.css']
})
export class AskIslamComponent implements OnInit {
	public asks = [];
	public selectedAsk: AskIslam;
	public _total: any;
	public _perPage: any;

	constructor(private _askService:AskIslamService,
              private router: Router) { }

	ngOnInit() {
		this.loadData(1);
	}

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

  onSelect(ask: AskIslam): void {
    this.selectedAsk = ask;
  }

  gotoDetail(): void {
    this.router.navigate(['/ask-islam/detail', this.selectedAsk.id]);
  }

}
