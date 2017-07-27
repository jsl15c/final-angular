import { Injectable } from '@angular/core';
// methods for AJAX for Http
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientToDoctorService {

  constructor(
    private myHttp: Http
  ) { }

  addToDoctor(doctorCode) {
    return this.myHttp
      .post(
        'http://localhost:3000/patient-api/add-patient-doctor',
        {withCredentials:true},
      )
      .toPromise()
      .then(res => res.json());
  }

  removeDoc() {
    return this.myHttp
      .post(
        'http://localhost:3000/patient-api/remove-doctor',
        {withCredentials:true},
      )
      .toPromise()
      .then(res => res.json());
  }

}
