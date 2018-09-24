import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public messages: any[] = [
    {'side': 'left', 'message': '明日はカープが優勝しそうですね。'},
    {'side': 'right', 'message': 'そうですね。'},
    {'side': 'right', 'message': '見に行かれるんですか？'},
    {'side': 'left', 'message': 'いえ、居酒屋で応援する予定です。私はチケットが取れませんでしたからね。居酒屋もはやめに予約しておかないと入れなさそうなので、ヤバそうですね。'},
    {'side': 'right', 'message': 'いえ、居酒屋で応援する予定です。私はチケットが取れませんでしたからね。居酒屋もはやめに予約しておかないと入れなさそうなので、ヤバそうですね。'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
