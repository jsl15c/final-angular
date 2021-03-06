import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.min.css']
})
export class SignupComponent implements OnInit {
  isPatient: boolean = true;
  isDoctor: boolean = false;

  firstName:string;
  lastName:string;
  email:string;
  password:string;
  errorMsg:string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  patientSignUp() {
    this.authService.patientSignup(this.firstName, this.lastName,
                            this.email, this.password)
      .then((resultFromApi) => {
        this.firstName = "";
        this.email = "";
        this.password = "";
        this.errorMsg = "";
        this.authService.checklogin();
        this.router.navigate(['/patient']);
      })
      .catch((err) => {
          const parsedError = err.json();
          this.errorMsg = parsedError.message;
      });
  }

  doctorSignUp() {
    this.authService.doctorSignup(this.firstName, this.lastName,
                            this.email, this.password)
      .then((resultFromApi) => {
        this.firstName = "";
        this.email = "";
        this.password = "";
        this.errorMsg = "";
        this.router.navigate(['/doctor']);

      })
      .catch((err) => {
          const parsedError = err.json();
          this.errorMsg = parsedError.message;
      });
  }

  selectUser() {
    this.isPatient = !this.isPatient;
    this.isDoctor = !this.isDoctor;
  }

}
