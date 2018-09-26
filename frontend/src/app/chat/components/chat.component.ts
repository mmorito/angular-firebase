import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private roomId: string;

  public message: string;
  public messages: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('id');
  }

  // private getTimeline(): void {
  //   this.itemDoc = this.afs.doc<Item>('items/1');
  // }

  public send(): void {
    if (this.message && this.message.trim().length > 0) {
      this.messages.push({'side': 'right', 'message': this.message});
      this.message = '';
    }
  }

}
