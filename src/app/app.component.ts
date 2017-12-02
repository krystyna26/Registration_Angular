import { Component } from '@angular/core';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
// import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
// import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  status = 0;
  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    street_address: '',
    apt: '',
    city: '',
    state: '',
    lucky: ''
  }
  users = [];
  // message = '';

  onSubmit(){
    this.users.push(this.user);
    console.log(this.users);
    this.status = 1;
    // this.message = "Thank you for registering with us ",this.user.first_name,". We just sent you a confirmation email at ",this.user.email,", and we will send all mail to ",this.user.street_address,this.user.city,this.user.state,". Have a wonderful day!";
    // this.user = {
    //   first_name: '',
    //   last_name: '',
    //   email: '',
    //   password: '',
    //   street_address: '',
    //   apt: '',
    //   city: '',
    //   state: '',
    //   lucky: ''
    // }
    console.log(this.user);
  }
}

