import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './chat/components/chat.component';

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'chat/:roomId', component: ChatComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
