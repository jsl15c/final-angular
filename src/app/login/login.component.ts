import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.min.css']
})
export class LoginComponent implements OnInit {
  // isPatient: boolean = true;
  // isDoctor: boolean = false;

  firstName:string;
  lastName:string;
  email:string;
  password:string;
  errorMsg:string;

  isPatient:boolean = true;
  isDoctor:boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  patientLogin() {
    this.authService.patientLogin(this.email, this.password)
      .then((resultFromApi) => {
        this.email= "",
        this.password = ""
        this.errorMsg = ""
        // redirect to patient page
        this.router.navigate(['/patient']);
        this.authService.isLoggedOut = false;
      })
      .catch((err) => {
      const parsedError = err.json();
      console.log(parsedError + '🛑');
      this.errorMsg = parsedError;
    });
  }

  doctorLogin() {
    this.authService.doctorLogin(this.email, this.password)
      .then((resultFromApi) => {
        this.email= "",
        this.password = ""
        this.errorMsg = ""
        // redirect to doctor page
        this.router.navigate(['/doctor']);
        this.authService.isLoggedOut = false;
      })
      .catch((err) => {
        const parsedError = err.json();
        console.log(parsedError + '🛑');
        this.errorMsg = parsedError;
    });
  }

  selectUser() {
    this.isPatient = !this.isPatient;
    this.isDoctor = !this.isDoctor;
  }

}
