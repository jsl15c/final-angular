import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.min.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  isClicked:boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.checklogin()
    .then((resultFromApi) => {
      if (resultFromApi.userType === 'patient') {
        this.router.navigate(['/patient']);
        // console.log(resultFromApi);
        // this.authService.currentUser = resultFromApi;
      }
      if (resultFromApi.userType === 'doctor') {
        this.router.navigate(['/doctor']);
        // console.log(resultFromApi.userType);
        // this.authService.currentUser = resultFromApi;
      }
    })
    .catch((err) => {
      if(err) {
        console.log(err);
        return;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.authService.isLoggedOut = true;
    this.router.navigate(['/login']);
  }

  toggleOpen() {
    this.isClicked = !(this.isClicked);
  }
}
