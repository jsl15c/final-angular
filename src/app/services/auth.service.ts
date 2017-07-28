import { Injectable } from '@angular/core';
// methods for AJAX for Http
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

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
        environment.apiBase + '/patient-api/signup',
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
      environment.apiBase + '/patient-api/login',
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
        environment.apiBase + '/doctor-api/signup',
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
      environment.apiBase + '/doctor-api/login',
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
      environment.apiBase + '/api/logout',
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
      environment.apiBase + '/api/checklogin',
      // send cookies across domains
      {withCredentials:true},
    )
    .toPromise()
    .then(res => res.json());
  }

  // GET checklogin
  populate() {
    return this.myHttp.get(
      environment.apiBase + '/api/populate',
      // send cookies across domains
      {withCredentials:true},
    )
    .toPromise()
    .then(res => res.json());
  }

}
