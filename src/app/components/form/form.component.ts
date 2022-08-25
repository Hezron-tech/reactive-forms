import { FormControl } from '@angular/forms';
// import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  addForms!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
   

    this.addForms = this.fb.group({
      Username:[null,[Validators.required]],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,this.checkPassword]],
      conf_password: [null,[Validators.required]],
      bio: [null,[Validators.required]],
    });
  }

  addUser() {
    console.log(this.addForms.value);
  }

  checkPassword(control:FormControl){
   const value=control.value
    const special=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]+/.test(value)
    return !special? {special:true} :null

    
  }
}
