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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.checklogin()
    .then((resultFromApi) => {
      console.log(resultFromApi);
      // this.isLoggedOut = false;
      if (resultFromApi.userType === 'patient') {
        this.router.navigate(['/patient']);
        // console.log(resultFromApi.userType);
        this.authService.isLoggedOut = false;
        this.authService.currentUser = resultFromApi;
      }
      if (resultFromApi.userType === 'doctor') {
        this.router.navigate(['/doctor']);
        // console.log(resultFromApi.userType);
        this.authService.isLoggedOut = false;
        this.authService.currentUser = resultFromApi;
      }
    })
    .catch((err) => {
      if(err) {
        this.authService.isLoggedOut = true;
        return;
      }
    });

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.authService.isLoggedOut = true;
  }
}
