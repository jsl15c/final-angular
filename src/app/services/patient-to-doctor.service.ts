import { Injectable } from '@angular/core';
// methods for AJAX for Http
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class PatientToDoctorService {

  constructor(
    private myHttp: Http
  ) { }

  addToDoctor(doctorCode) {
    return this.myHttp
      .post(
        environment.apiBase + '/patient-api/add-patient-doctor',
        {
          patientKey:doctorCode
        },
        {withCredentials:true},
      )
      .toPromise()
      .then(res => res.json());
  }

  removeDoc() {
    return this.myHttp
      .post(
        environment.apiBase + '/patient-api/remove-doctor',
        {withCredentials:true},
      )
      .toPromise()
      .then(res => res.json());
  }

}
