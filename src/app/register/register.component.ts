import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
  

export class RegisterComponent implements OnInit {

  errors: boolean = false;
  registerForm = new FormGroup({
    age: new FormControl(null, [Validators.required,Validators.max(10), Validators.min(3)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,5}$')]),
  })

  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    // $("#a").slideUp(4000)
  }


  submitRegister(form: FormGroup) {
    console.log(form);
    this._authService.signUp(form.value).subscribe(res => {
      console.log(res);
      if (res.message === "success") {
        this._router.navigate(['/login'])
      } else {
        this.errors = true;
      }
      
    })
    
  }

}
