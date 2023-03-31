import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from "./auth-data.model";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService : HttpClient) { }

  createUser(clientId : number, name : string, email : string, password : string, company :  string, number : number, address : string) {
    // const authData: AuthData = { }
      // clientId : clientId,
      // name : name,
      // email : email, 
      // password : password, 
      // company :  company,
      // number : number,
      // address : address}
    // return this.apiService.post('http://localhost:3000/api/client/register',authData )
  }
}
