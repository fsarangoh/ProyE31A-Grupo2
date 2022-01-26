import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm = this.fb.group({
    nombres: [''],
    apellidos: [''],
    email: [''],
    mensaje:['']
  });


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
