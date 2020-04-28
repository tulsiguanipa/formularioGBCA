import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Nombre, Sector, Historial, Documento } from '../../models/model.interface';
import { VisitasService } from '../../services/visitas.service';
import { documento } from 'src/app/constants/data';


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
  public historial: Historial[] = [];
  public dni: Documento[];


  fecha = new Date();

  myForms: FormGroup;
  pageAct = 1;

  onSelect() {

  }

  constructor( private fb: FormBuilder,
               private visitas: VisitasService, ) {

    this.formulario();
  }

  ngOnInit(): void {
    this.area = this.visitas.getSector();
    this.visito = this.visitas.getNombres();
    this.dni = this.visitas.getDNI();
  }

  get documentoisInvalid() {
      return this.myForms.get('documento').invalid && this.myForms.get('documento').touched;
  }

  get visitasInvalid() {
    return this.myForms.get('visita').invalid && this.myForms.get('visita').touched;
  }

  get sectorInvalid() {
    return this.myForms.get('sector').invalid && this.myForms.get('sector').touched;
  }

  get numTarjetaisInvalid() {
    return this.myForms.get('numeroTarjeta').invalid && this.myForms.get('numeroTarjeta').touched;
}



  formulario() {
    this.myForms = this.fb.group({
      documento    : ['', [Validators.required, Validators.minLength(7)]],
      numeroTarjeta: ['', [Validators.required]],
      visita       : ['', [Validators.required]],
      sector       : ['', [Validators.required]]
    });

  }

  ingresar() {
    if ( this.myForms.invalid) {
      return Object.values(this.myForms.controls).forEach( control => {
        control.markAllAsTouched();
      });
    }
    console.log(this.myForms);
    const nuevaVisita: Historial = {
      id: Math.floor(Math.random() * 100),
      fecha: new Date(),
      nombre: this.visito.filter((persona) => {
        return persona.id === Number(this.myForms.value.visita);
      })[0].nombre
    };
    this.historial.push(nuevaVisita);
    this.myForms.reset();
  }

  consultar() {
    const resultado = this.dni.filter( (document) => {
      return document.id === Number(this.myForms.value.documento);
    });
    console.log(resultado);

  }

}
