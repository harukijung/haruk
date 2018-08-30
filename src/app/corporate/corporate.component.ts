import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Corp } from '../models/corp';
import { CorpService } from '../services/corp.service';
@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  
  constructor(private _corpService:CorpService) { }

  corpAsyn: Observable<Corp[]>;
 
  ngOnInit() {

    this.corpAsyn = this._corpService.getAllCorp();
  }

}
