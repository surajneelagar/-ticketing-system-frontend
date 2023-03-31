import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any[] = []
  adminForm!: FormGroup;
  // constructor(public userData : AuthService){ }
  constructor(public http : HttpClient ){}
 
  ngOnInit(): void {
    // this.userData.user().subscribe((data) => {
    //   console.log(data)
    //   this.users = data as any[]
      
    // })
    this.initForms();
  }
  private initForms(): void {
    this.adminForm = new FormGroup({
      clientId : new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      company: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl('')
    });
  }
  saveAdmin() {
    // this.userData.createUser().subscribe((response) => {
    //   console.log(response)
    // })
    const formData = this.adminForm.value;
    this.http.post('http://localhost:3000/api/client/register', formData).subscribe((response) => {
      console.log(response);
      
    })
    console.log(this.adminForm.value);
    
  }
  
}
