import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { valueChanges } from 'src/app/helper/formerror.helper';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupforms!: FormGroup;
  submitted: boolean = false
  public fieldTextType: boolean = false;


  formErrors = {
    firstName:'',
    lastName:'',
    mobileNo:'',
    email:'',
    password:'',
    referralCode:''
  }

  formErrorMessages = {
    firstName:{
      required:"First name required"
    },
    lastName:{
      required:"Last name required"
    },
    mobileNo:{
      required:"Mobile Number required",
    },
    email:{
      required:"Email is required",
      pattern:"Email is invalid"
    },
    password:{
      required:"Password is required",
      minlength:"Minimum 6 charater required for password"
    }

  }

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.signupforms = this._fb.group({
      firstName:["", Validators.required],
      lastName:["", Validators.required],
      mobileNo:["", Validators.required],
      email:["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:["", [Validators.required, Validators.minLength(6)]],
      referralCode:[""]
    })

    this.signupforms.valueChanges.subscribe(() =>{
      this.formErrors = valueChanges(this.signupforms, {...this.formErrors}, this.formErrorMessages)
    })
  }

  get fr(){
    return this.signupforms.controls;
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  signup(){
    if(this.signupforms.invalid){
      this.signupforms.markAllAsTouched()
      this.formErrors = valueChanges(this.signupforms, {...this.formErrors}, this.formErrorMessages);
      return
    }
    let body = {
      "firstname":this.signupforms.controls.firstName.value,
      "lastname":this.signupforms.controls.lastname.value,
      "mobileno":this.signupforms.controls.mobileNo.value,
      "email":this.signupforms.controls.email.value,
      "password": this.signupforms.controls.password.value,
      "referralCode":this.signupforms.controls.referralCode.value ? this.signupforms.controls.referralCode.value: "",
    }
    console.log(body)
  }

}
