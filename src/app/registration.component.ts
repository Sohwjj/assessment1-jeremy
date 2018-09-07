import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('regForm')
  regForm: NgForm;

  constructor(private regSvc: RegistrationService) { }

  ngOnInit() { }


  processReg(regForm: NgForm) {
    console.log('Processing User Registration: ', this.regForm.value);
    this.regSvc
    .addReg(regForm.value)
    .subscribe((result)=>{
      console.log(result);
    });
    // for (let i in this.regForm.value) {
      // console.log('i = ', i, ', v = ', this.regForm.value[i]);
    // }
    this.regForm.resetForm();
  }

}
