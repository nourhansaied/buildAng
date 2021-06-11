import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,5}$')]),
  })
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  login(form:FormGroup) {
    this._authService.signIn(form.value).subscribe(res => {
      console.log(res);
      if (res.message == "success") {
        // naviage to home
        localStorage.setItem("userLogin",res.token)
        this._authService.setCurrentUser()
        this._router.navigate(['/home'])
      } else {
        // error message 
      }
      
    })
  }
}
