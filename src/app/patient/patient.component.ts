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

  errorMsg:string;

  doctorCode:string;

  hasDoctor:boolean;

  currentUser:any = {};

  showTrack:boolean;
  showProgress:boolean;
  showDoctor:boolean;
  showNotes:boolean;
  showHelp:boolean;



  constructor(
    private dataService: DataService,
    private router: Router,
    public authService: AuthService,
    private pdService: PatientToDoctorService
  ) { }


  ngOnInit() {
    this.checkLogin();
    this.showTrack = true;
  }

  addPatientData() {
    this.dataService.addData(this.duration, this.disruptions,
                             this.diet)
      .then((resultFromApi) => {
        // console.log(resultFromApi);
        this.duration = null;
        this.disruptions = null;
        this.diet = [];
        this.showTrack = false;
        this.showProgress = true;
      })
      .catch((err) => {
        // const error = err.json();
        // console.log(error);
        console.log('🔥🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥');
        return;
      })
  }

  addToDoctor() {
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

  slideTrack() {
    this.showTrack = true;
    this.showProgress = false;
    this.showDoctor = false;
    this.showNotes = false;
    this.showHelp = false;
  }

  slideProgress() {
    this.showTrack = false;
    this.showProgress = true;
    this.showDoctor = false;
    this.showNotes = false;
    this.showHelp = false;
  }

  slideDoctor() {
    this.showTrack = false;
    this.showProgress = false;
    this.showDoctor = true;
    this.showNotes = false;
    this.showHelp = false;
  }

  slideNotes() {
    this.showTrack = false;
    this.showProgress = false;
    this.showDoctor = false;
    this.showNotes = true;
    this.showHelp = false;
  }

  slideSettings() {
    this.showTrack = false;
    this.showProgress = false;
    this.showDoctor = false;
    this.showNotes = false;
    this.showHelp = true;
  }


  }
