import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;
  isSubmitted = false;

  roleNames = ["Sale","Account"];

  constructor(private fb: FormBuilder,
     ) { }

     // accessor
  get roles(){
    return this.userForm.get("roles") as FormArray;
    // we get from userForm (from input template) and select base on key roles: this.fb.array([])
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      roles: this.fb.array([])
    });

    // After we start==>we loop and add role to the roleNames 
    for(let i of this.roleNames){
      this.roles.push(this.fb.control(''));// where we add roles from our list 
    }

  }

  private getUserData(){
    let data = this.userForm.value;

    let selectedRoles = [];

    for(let i =0; i<data.roles.length; i++){
      if(data.roles[i]){
          selectedRoles.push(this.roleNames[i])
      }
    }
    data.roles = selectedRoles;
    //console.log(data);
    return data;
  }

  saveUser(){
    console.log("================================")
    let myUser = new User(this.userForm, this.roleNames);
    console.log(myUser);
    console.log(myUser.roles);
  }
    

}