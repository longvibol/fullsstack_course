import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'FE';
  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem("token");

    // we need to verify with BE first before we sign 
    
  }

  switchView(isSignedIn: boolean){
    this.isLoggedIn = isSignedIn;
  }
}
