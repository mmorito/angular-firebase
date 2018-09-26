import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './chat/components/chat.component';
import { MessageComponent } from './chat/components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
