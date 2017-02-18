import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {AskIslam} from '../../common/ask-islam';
import {AskIslamService} from '../../common/ask-islam.service';

@Component({
	moduleId: module.id,
  selector: 'app-ask-islam-detail',
  templateUrl: './ask-islam-detail.component.html',
  styleUrls: ['./ask-islam-detail.component.css']
})
export class AskIslamDetailComponent implements OnInit {
	ask: AskIslam;

  constructor(
    private askService: AskIslamService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => this.askService.getAsk(+params['id']))
      .subscribe((ask: any) => {this.ask = ask});
  }

  goBack(): void {
    this.location.back();
  }

}
