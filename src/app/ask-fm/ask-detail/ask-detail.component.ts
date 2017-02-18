import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {AskFM} from '../../common/ask-fm';
import {AskFmService} from '../../common/ask-fm.service';


@Component({
  moduleId: module.id,
  selector: 'app-ask-detail',
  templateUrl: './ask-detail.component.html',
  styleUrls: [ './ask-detail.component.css' ]
})

export class AskDetailComponent implements OnInit {
  ask: AskFM;

  constructor(
    private askService: AskFmService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => this.askService.getAsk(+params['id']))
      .subscribe((ask: any) => {this.ask = ask;});
  }

  goBack(): void {
    this.location.back();
  }
}
