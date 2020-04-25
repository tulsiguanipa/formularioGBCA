import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  fecha = new Date();

  myForms: FormGroup;

  constructor( private fb: FormBuilder, ) { }

  ngOnInit() {
  }

  formulario(){
    this.myForms = this.fb.group({
    });

  }
}
