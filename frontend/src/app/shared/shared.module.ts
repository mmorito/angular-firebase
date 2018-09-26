import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthService,
    AuthComponent
  ]
})
export class SharedModule { }
