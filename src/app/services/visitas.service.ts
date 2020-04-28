import { Injectable } from '@angular/core';
import { Nombre, Sector, Documento } from '../models/model.interface';
import { nombre, sector, documento } from '../constants/data';


@Injectable()

export class VisitasService {

//  searchDNI(dni: Number): String {
   // personas.filter((p) => {
     // p.
   // })
 // }
  getDNI(): Documento[] {
    return documento;
  }

  getSector(): Sector[] {
    return sector;
  }

  getNombres(): Nombre[] {
    return nombre;
  }
}
