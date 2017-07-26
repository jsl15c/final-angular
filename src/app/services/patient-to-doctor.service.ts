import { Injectable } from '@angular/core';
// methods for AJAX for Http
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientToDoctorService {

  constructor(
    private myHttp: Http
  ) { }

  addToDoctor(code) {
    return this.myHttp
      .get(
        'http://localhost:doctor-api/list',
        {withCredentials:true},
      )
      .toPromise()
      .then(res => res.json());
  }

}
