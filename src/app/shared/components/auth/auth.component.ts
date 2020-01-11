import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Output() public logedin = new EventEmitter();
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
        this.logedin.emit(this.userInfo);
      }
    });
  }

  public logout(): void {
    this.authService.logout();
    alert('lougout!');
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
