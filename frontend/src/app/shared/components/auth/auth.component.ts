import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public isLogedin: boolean;
  public userInfo: any;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  public login(): void {
    this.authService.login().then((res) => {
      if (res.credential) {
        this.isLogedin = true;
        this.userInfo = res.user;
      }
    });
  }

  public logout(): void {
    this.authService.logout();
    this.isLogedin = false;
  }

  private getUserInfo(): void {
    this.authService.getLoginUserInfo('displayName,email,photoURL')
    .then(user => {
      this.isLogedin = true;
      this.userInfo = user;
    }, () => {
      this.isLogedin = false;
    });
  }

}
