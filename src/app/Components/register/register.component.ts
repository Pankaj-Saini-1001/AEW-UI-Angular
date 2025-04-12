import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {  
  
  // form details
  
  registerform = new FormGroup({
    name: new FormControl('' , [Validators.required, Validators.maxLength(20)]),
    email : new FormControl('', [Validators.email , Validators.required , Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') ]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    address: new FormControl('', [Validators.required]),
    pass : new FormControl('', [Validators.required ])
  })
  
  get emailhere(){                                      // getting email for validators if conditions (Span)
    return this.registerform.get('email'); 
  }

  get namehere(){
    return this.registerform.get('name');
  }

  get phonehere(){
    return this.registerform.get('phone');
  }

  get addresshere(){
    return this.registerform.get('address');
  }
  
  get passhere(){                                       
    return this.registerform.get('pass');
  }
  
  
  
  // API
  
  http = inject(HttpClient)

  router = inject(Router)
  
  postvalues(){
    if(this.registerform.valid){
      const userobj = {
        name: this.registerform.get('name')?.value,
        username: this.registerform.get('email')?.value,
        phone: this.registerform.get('phone')?.value,
        address: this.registerform.get('address')?.value,
        password: this.registerform.get('pass')?.value
      }
         this.http.post("http://localhost:8001/users/register", userobj).subscribe((res : any)=>{
          if(res){
            console.log(res);
            localStorage.setItem('address', res.address);
            this.registerform.reset();
          this.move();
          }
         })
    }
    else{
      alert("Please enter the details")
    }
  }
  
    move(){
      alert("Registered Sucessfully \n \n You can see your details in console");
      this.router.navigate(['/login']);
    }
  

}
