import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { valueChanges } from 'src/app/helper/formerror.helper';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  forgetpasswordforms!: FormGroup;
  submitted: boolean = false

  formErrors = {
    "email":""
  }

  formErrorMessages = {
    email:{
      required:"Email is required",
      pattern:"Invalid Email"
    }
  }

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    // this.forgetpasswordforms = new FormGroup({
    //   "email":new FormControl("", Validators.required)
    // })
    this.createForm()
  }

  createForm(){
    this.forgetpasswordforms = this._fb.group({
      email:["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    })

    this.forgetpasswordforms.valueChanges.subscribe(() =>{
      this.formErrors = valueChanges(this.forgetpasswordforms, {...this.formErrors}, this.formErrorMessages)
    })
  }

  get fr(){
    return this.forgetpasswordforms.controls;
  }

  forgetpassword(){
    if(this.forgetpasswordforms.invalid){
      this.forgetpasswordforms.markAsTouched();
      this.formErrors = valueChanges(this.forgetpasswordforms, {...this.formErrors}, this.formErrorMessages)
      return
    }
    this.submitted = false
    let body = {
      "email":this.forgetpasswordforms.controls.email.value,
    }
    console.log(body)
  }

}