import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public message: string;
  public messages: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  public send(): void {
    this.messages.push({'side': 'right', 'message': this.message});
    this.message = '';
  }

}
