import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  // onLogin(form: NgForm) {
  //   console.log(form.value);
  // }
  loginForm!: FormGroup;
  constructor(public http : HttpClient ){}
  ngOnInit(): void {
      this.initForms()
  }

  private initForms(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  saveLogin() {
    const loginData = this.loginForm.value;
    this.http.post('http://localhost:3000/api/client/login',loginData ).subscribe((response) => {
      console.log(response);
    })
    console.log(this.loginForm.value)
    }

}
