import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  public login(): Promise<auth.UserCredential> {
    // const provider = new auth.GoogleAuthProvider();
    // provider.addScope('profile');
    // provider.addScope('email');
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public logout(): void {
    this.afAuth.auth.signOut();
  }

  /**
   * ログイン情報を返す
   * https://firebase.google.com/docs/reference/js/firebase.UserInfo
   * @param  fields カンマ区切りでフィールド名を指定
   * @return        [description]
   */
  public getLoginUserInfo(fields: string): any {
    return new Promise((resolve, reject) => {
      const res = {};
      if (!fields || fields.length === 0) {
        resolve(res);
        return;
      }
      const fs = fields.split(',');
      try {
        this.afAuth.user.subscribe(user => {
          if (!user) {
            reject(res);
            return;
          }
          for (const v of fs) {
            if (user[v]) { res[v] = user[v]; }
          }
          resolve(res);
        });
      } catch (e) {
        reject(res);
      }
    });
  }

}
