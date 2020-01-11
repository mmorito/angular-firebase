import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { AuthComponent } from './components/auth/auth.component';
import { OrderByPipe } from './pipes/order-by.pipe';

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
    OrderByPipe,
  ],
  declarations: [
    AuthComponent,
    OrderByPipe
  ]
})
export class SharedModule { }
