import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  userId: string;
  constructor(private http : HttpClient) { }
  login(email: string, password: string) {
        return new Promise<void>((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/login',
        { email: email, password: password })
        .subscribe(
          (authData: { token: string, IdUtilisateur: string }) => {
            this.token = authData.token;
            this.userId = authData.IdUtilisateur;
            localStorage.setItem('token',this.token);
            localStorage.setItem('userId',this.userId);
            //console.log('token : ',this.isAuth);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  logout() {
    this.userId = null;
    this.token = null;
    localStorage.removeItem('token'); 
    localStorage.removeItem('userId');
    console.log('logout');
    
  }
  Register(user:any) {
    return  this.http.post('http://localhost:3000/api/auth/signup',user);
  }

  Update(data:any,id:string){
    return this.http.put('http://localhost:3000/api/projet/Update/' + id, data);
  }
  Add(data:any){
    
    return this.http.post('http://localhost:3000/api/projet/Add', data);
  }
}