import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';

import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private roomId: string;
  public userInfo: any;

  private collections: AngularFirestoreCollection;
  public items: Observable<{}[]>;

  public message: string;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('roomId');
    this.collections = this.afs.collection<Message>('talkroom-' + this.roomId);
    this.items = this.collections.valueChanges();
    this.authService.getLoginUserInfo('displayName,email,photoURL')
    .then(user => {
      this.userInfo = user;
    }, () => this.userInfo = {});
  }

  public login(userInfo): void {
    this.userInfo = userInfo;
  }

  // private getTimeline(): void {
  //   this.itemDoc = this.afs.doc<Item>('items/1');
  // }

  public send(): void {
    if (this.message && this.message.trim().length > 0) {
      const msg = new Message();
      msg.email = this.userInfo.email;
      msg.displayName = this.userInfo.displayName;
      msg.message = this.message;
      msg.timestamp = new Date();
      this.collections.add(msg.getData());
      this.message = '';
    }
  }

}
