import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLogin: boolean = false;
  constructor(private _authService: AuthService, private _router: Router) {    
    this._authService.currentUser.subscribe((res) => {
      if (res) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    
  })
    
   }

  ngOnInit(): void {
  }


  signOut() {
    let data = {
      token : localStorage.getItem("userLogin")
    }
    this._authService.signOut(data).subscribe(res => {
      if (res?.message == "success") {
        this._authService.removeCurrentUser();
        this._router.navigate(['/login'])
      }
      
    })
  }
}
