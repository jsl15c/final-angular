import { Injectable } from '@angular/core';
// methods for AJAX for Http
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  isLoggedOut:boolean;

  currentUser: any = {};

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
      'http://localhost:3000/patient-api/login',
      {
        email:email,
        password:password
      },
      {withCredentials:true}
    )
    .toPromise()
    .then(res => res.json());
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
      'http://localhost:3000/doctor-api/login',
      {
        email:email,
        password:password
      },
      {withCredentials:true}
    )
    .toPromise()
    .then(res => res.json());
  }



// dynamic functions - still refactoring others

  // POST logout
  logout() {
    return this.myHttp
    .post(
      'http://localhost:3000/api/logout',
      {},
      {withCredentials:true}
    )
    .toPromise()
    // parse JSON
    .then(res => res.json());
  }

  // GET checklogin
  checklogin() {
    return this.myHttp.get(
      'http://localhost:3000/api/checklogin',
      // send cookies across domains
      {withCredentials:true},
    )
    .toPromise()
    .then(res => res.json());
  }

}
