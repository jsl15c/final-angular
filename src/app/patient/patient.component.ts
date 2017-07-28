import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { PatientToDoctorService } from '../services/patient-to-doctor.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.min.css']
})
export class PatientComponent implements OnInit {

  duration:number;
  disruptions:number;
  diet:Array<string>;
  treatment:Array<string>;

  errorMsg:string;

  doctorCode:string;

  hasDoctor:boolean;

  currentUser:any = {};

  viewTrack:boolean;
  viewProgress:boolean;
  viewDoctor:boolean;
  viewNotes:boolean;
  viewHelp:boolean;



  constructor(
    private dataService: DataService,
    private router: Router,
    public authService: AuthService,
    private pdService: PatientToDoctorService
  ) { }


  ngOnInit() {
    this.authService.checklogin()
    this.checkLogin();
  }

  addPatientData() {
    this.dataService.addData(this.duration, this.disruptions,
                             this.diet, this.treatment)
      .then((resultFromApi) => {
        this.duration = null;
        this.disruptions = null;
        this.diet = [];
        this.treatment = [];
        this.errorMsg = '';
      })
      .catch((err) => {
        console.log(err);
        return;
      })
  }

  addToDoctor() {
    console.log(this.doctorCode + "---------------------")
    this.pdService.addToDoctor(this.doctorCode)
      .then((resultFromApi) => {
        console.log('code: ' + this.doctorCode)
        this.doctorCode = "";
        console.log('doctor added: ' + this.doctorCode);
        this.checkLogin();


      })
      .catch((err) => {
        // const parsedError = err.json();
        // this.errorMsg = parsedError.message;
        console.log('error code: ' + this.doctorCode)
      })
  }

  removeDoc() {
    this.pdService.removeDoc()
      .then((resultFromApi) => {
      console.log(resultFromApi);
    })
    .catch((err) => {
      console.log('error removing id');
    })
  }


    checkLogin() {
      this.authService.checklogin()
      .then((resultFromApi) => {
        // this.isLoggedOut = false;
        console.log(resultFromApi);
        if (resultFromApi.userType === "patient") {
          this.router.navigate(['/patient']);
          this.authService.currentUser = resultFromApi;
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
