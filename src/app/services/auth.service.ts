import { Injectable } from '@angular/core';
// methods for AJAX for Http
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private myHttp: Http) { }

  // POST signup
  //  an argument for each req.body in API route
  patientSignup(firstName, lastName, email, password) {
    return this.myHttp
      .post(
        'http://localhost:3000/patient-api/signup',
        // form body info to send to backend (req.body)
        {
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:password
        },
        // send cookies across domains
        {withCredentials:true}
      )
      .toPromise()
      .then(res => res.json());
  }

  // POST login
  patientLogin(email, password) {
    return this.myHttp.post(
      'http://localhost/patient-api/login',
      {
        email:email,
        password:password
      },
      {withCredentials:true}
    )
    .toPromise()
    .then(res => res.json());
  }

  // POST logout
  patientLogout() {
    return this.myHttp
      .post(
        'http://localhost/patient-api/logout',
        {},
        {withCredentials:true}
      )
      .toPromise()
      .then(res => res.json());
  }

  // GET checklogin
  patientChecklogin() {
    return this.myHttp.get(
      'http://localhost/patient-api/checklogin',
      // send cookies across domains
      {withCredentials:true},
    )
  }








  // DOCTOR AUTH FUNCTIONS
  // POST signup
  //  an argument for each req.body in API route
  doctorSignup(firstName, lastName, email, password) {
    return this.myHttp
      .post(
        'http://localhost:3000/doctor-api/signup',
        // form body info to send to backend (req.body)
        {
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:password
        },
        // send cookies across domains
        {withCredentials:true}
      )
      .toPromise()
      .then(res => res.json());
  }

  // POST login
  doctorLogin(email, password) {
    return this.myHttp.post(
      'http://localhost/doctor-api/login',
      {
        email:email,
        password:password
      },
      {withCredentials:true}
    )
    .toPromise()
    .then(res => res.json());
  }

  // POST logout
  doctorLogout() {
    return this.myHttp
      .post(
        'http://localhost/doctor-api/logout',
        {},
        {withCredentials:true}
      )
  }

  // GET checklogin
  doctorChecklogin() {
    return this.myHttp.get(
      'http://localhost/doctor-api/checklogin',
      // send cookies across domains
      {withCredentials:true},
    )
  }
}
