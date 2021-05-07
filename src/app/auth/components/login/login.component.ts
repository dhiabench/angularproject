import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor( private authService: AuthService ,private router: Router) { }

  ngOnInit(): void {
    /*let data = {
      nomProjet:"test",
       descriptionProjet : "testblablabla"
     };
    this.authService.Add(data).subscribe(res=>
      {
        console.log('added');
      },
      (error)=>{
        console.log('error');
      });*/
  }


  onSubmit(f: NgForm){
    const email = f.value.Email;
    const password =f.value.password;
    console.log(f.value);
    this.authService.login(email,password).then(
        () => {
          console.log('yess!');
          
          this.router.navigate(['/feed']).then(()=>{
            window.location.reload();
          });
    
      }
      ).catch(
        (error) => {
          this.errorMessage = 'incorrect email or password';
        }
      );
    
  }
}