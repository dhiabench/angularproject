import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    const username = f.value.Nom;
    const email = f.value.Email;
    const password =f.value.password;
    let data={
      Username :username,
      email:email,
      password:password
    }
    console.log(data);
    this.authService.Register(data).subscribe(
      data => {
        console.log('Registration')
        this.authService.login(email,password).then(
          () => {
            console.log('Registration and Logiiin !! ');
            //this.router.navigate(['/']);
          }
        )
      }
      ,
      error => {
        console.log(error.status+"you have already registered using this email");
      });
  }

}
