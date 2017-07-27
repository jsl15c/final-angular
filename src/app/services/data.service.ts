import { Injectable } from '@angular/core';
// methods for AJAX for Http
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private myHttp: Http) { }

  // POST patient data
   addData(duration, disruptions, diet, treatment) {
     return this.myHttp
      .post(
        'http://localhost:3000/api/patient-data',
        {
          sleep: {
            duration:duration,
            disruptions:disruptions,
            quality:duration/disruptions
          },
          diet:diet,
          treatment:treatment
        },
        // send cookies across domains
        {withCredentials:true}
      )
      .toPromise()
      .then(res => res.json());
   }
}
