import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  
  register=new FormGroup({
    remail:new FormControl(''),
    rpassword:new FormControl(''),
  })

  constructor(public auth:Auth) { }
  submitregistration(){
    // console.log(this.register.value)
    createUserWithEmailAndPassword(this.auth,this.register.value.remail, this.register.value.rpassword).then((res:any)=>{
      // console.log(res.user)
      alert('Login Successfull')
    }).catch((err)=>{
      alert(err.message)
    })
    
  }
  ngOnInit(): void {
  }

}
