import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService) { }
  public connecte =false;
  ngOnInit(): void {
    if(localStorage.getItem('userId') != null){
      this.connecte=true;
    }
    console.log(this.connecte); 
//behy tawa 3ana eli bch n7otouh fel ng if

  }
  logout(){
    this.authService.logout();
    console.log('logout');
    window.location.reload();
  }
//behi lehne stana n9olik kifeh
}
