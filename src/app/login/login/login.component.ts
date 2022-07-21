import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
verification:any
message='Please enter correct email & Password'
  loginform=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

 
  
  constructor(public auth:Auth, private route:Router) { }
  submitform(){
   this.verification=signInWithEmailAndPassword(this.auth, this.loginform.value.email, this.loginform.value.password).then((res:any)=>{
      console.log(res.user)
    }).catch((err)=>{
      alert(err.message)
    })
  
    if (this.verification){
      this.route.navigate(['/front'])
    }
    else{
      alert(this.message)
    }
  }
  ngOnInit(): void {

  }

}
