import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { valueChanges } from 'src/app/helper/formerror.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginforms!: FormGroup;
  submitted: boolean = false
  message:string = "";
  public fieldTextType: boolean = false;
  formErrors = {
    email:'',
    password:''
  }
  formErrorMessages = {
    email:{
      required:"Email is Required",
      pattern:"Email is Invalid"
    },
    password:{
      required:"Password is Required",
      minlength:"Minimum length of password must be 6 character"
    }
  }


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
      
    // Creating form using the formBuilder
    this.loginforms = this._fb.group({
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ["", [Validators.required, Validators.minLength(6)]]
      })

      //Validating input data
      this.loginforms.valueChanges.subscribe(() =>{
        this.formErrors = valueChanges(this.loginforms, {...this.formErrors}, this.formErrorMessages); 
      })
  }


  get fr(){
    return this.loginforms.controls;
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  login(){
    if(this.loginforms.invalid){
      this.loginforms.markAllAsTouched()
      this.formErrors = valueChanges(this.loginforms, {...this.formErrors}, this.formErrorMessages); 
      return
    }

    let body = {
      "email":this.loginforms.controls.email.value,
      "password": this.loginforms.controls.password.value
    }
    console.log(body)
  }

}
