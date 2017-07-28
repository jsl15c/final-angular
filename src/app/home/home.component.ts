import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.min.css']
})
export class HomeComponent implements OnInit {
  isPatient: boolean = true;
  isDoctor: boolean = false;


  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  selectUser() {
    this.isPatient = !this.isPatient;
    this.isDoctor = !this.isDoctor;
  }


}
