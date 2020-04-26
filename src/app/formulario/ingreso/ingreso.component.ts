import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Nombre, Sector } from '../../models/model.interface';
import { VisitasService } from '../../services/visitas.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
  providers: [VisitasService]
})
export class IngresoComponent implements OnInit {
  public selectedSector: Sector = { id: 0, sector: ' '};
  public area: Sector[];
  public visito: Nombre[];


  fecha = new Date();

  myForms: FormGroup;

  constructor( private fb: FormBuilder,
               private visitas: VisitasService ) {

    this.formulario();
  }

  ngOnInit(): void {
    this.area = this.visitas.getSector();
  }

  onSelect(id: number): void {
      // this.visito = this.visitas.getNombres().filter( item => item.sectorId === id);
      console.log('id: ', id);
  }

  get documentoisInvalid() {
      return this.myForms.get('documento').invalid && this.myForms.get('documento').touched;
  }

  get numTarjetaisInvalid() {
    return this.myForms.get('numeroTarjeta').invalid && this.myForms.get('numeroTarjeta').touched;
}

  formulario() {
    this.myForms = this.fb.group({
      documento    : ['', [Validators.required, Validators.minLength(7)]],
      numeroTarjeta: ['', [Validators.required]]
    });

  }

  ingresar() {
    if ( this.myForms.invalid) {
      return Object.values(this.myForms.controls).forEach( control => {
        control.markAllAsTouched();
      });

    }
  }

  consultar() {
      console.log(this.myForms);

  }
}
