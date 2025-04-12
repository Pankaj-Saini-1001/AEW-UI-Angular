import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

// form details

loginform = new FormGroup({
  email : new FormControl('', [Validators.email , Validators.required , Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') ]),
  pass : new FormControl('' , [Validators.required  ])
})

get emailhere(){                                      // getting email for validators if conditions (Span)
  return this.loginform.get('email'); 
}

get passhere(){                                       // geting pass
  return this.loginform.get('pass');
}



// API

http = inject(HttpClient)

postvalues(){
  if(this.loginform.valid){

  const userobj = {
    username : this.loginform.get('email')?.value,
    password : this.loginform.get('pass')?.value
  };

     this.http.post("http://localhost:8001/users/login", userobj).subscribe((res : any) => {
      if(res.token){
        localStorage.setItem('jwtToken', res.token);
        this.home();
      }
      else{
        alert("Login Failed");
      }
     });
      }
      else{
        alert("Please fill the login form");
      }
    }

    router = inject(Router)

  home(){
    alert("Login Sucessfully")
    this.router.navigate(['/home']);
  }

  move(){
    this.router.navigate(['/register']);
  }

signup(){
  window.location.href = "http://localhost:8001/oauth2/authorization/google";
}


}