import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(
    private router:Router,
    public authService: AuthService

  ) { }

  ngOnInit() {
    this.authService.checklogin()
    .then((resultFromApi) => {
      // this.isLoggedOut = false;
      console.log(resultFromApi);
      if (resultFromApi.userType === "doctor") {
        this.router.navigate(['/doctor']);
        this.authService.currentUser = resultFromApi;
        console.log(resultFromApi.patients);
      }
    })
    .catch((err) => {
      if(err) {
        this.router.navigate(['/signup']);
        return;
      }
    });


  }

}
