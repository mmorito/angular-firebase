import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    AuthComponent,
    MatIconModule,
  ],
  declarations: [
    AuthComponent
  ]
})
export class SharedModule { }
