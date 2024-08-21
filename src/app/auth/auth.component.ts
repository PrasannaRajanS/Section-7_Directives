import { Component, inject, Input } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  @Input()  email!:string
  @Input()  password!:string
  
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email, this.password);
  }

}
