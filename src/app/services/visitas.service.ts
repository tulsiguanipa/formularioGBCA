import { Injectable } from '@angular/core';
import { Nombre, Sector } from '../models/model.interface';
import { nombre, sector } from '../constants/data'


@Injectable()

export class VisitasService {

//  searchDNI(dni: Number): String {
   // personas.filter((p) => {
     // p.
   // })
 // }

  getSector(): Sector[]{
    return sector;
  }

  getNombres(): Nombre[]{
    return nombre;
  }
}
