import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() public email: string;
  @Input() public displayName: string;
  @Input() public timestamp: any;
  @Input() public side: string;
  @Input() public message: string;

  constructor() { }

  ngOnInit() {
  }

}
