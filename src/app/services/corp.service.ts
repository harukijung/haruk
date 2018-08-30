import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Corp } from '../models/corp';

@Injectable()
export class CorpService {

 /* extractData(res: Response) {
    return res.json();
  }*/

  

  constructor(private _httpClient: HttpClient) {  }
  //private BASEURL = SERVICEBASE + "customers";

  getAllCorp():Observable<Corp[]>{
   return this._httpClient.get<Corp[]>("http://localhost:3000/corp");
  }


}
