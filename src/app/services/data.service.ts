import { Injectable } from '@angular/core';
// methods for AJAX for Http
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
// import { AuthService } from './auth.service';

@Injectable()
export class DataService {

  constructor(
    private myHttp: Http
    // private authService: AuthService
  ) { }

  // POST patient data
   addData(duration, disruptions, diet) {
     return this.myHttp
      .post(
        environment.apiBase + '/api/patient-data/new',
        {
            duration:duration,
            disruptions:disruptions,
            quality:duration/disruptions,
            diet:diet
        },
        // send cookies across domains
        {withCredentials:true}
      )
      .toPromise()
      .then(res => res.json());
   }
}
