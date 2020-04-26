import { Injectable } from '@angular/core';
import { Nombre, Sector } from '../models/model.interface';



@Injectable()

export class VisitasService {
  private sector: Sector[] = [
    { 
      id: 1,
      sector: 'DGTAD - Legal y técnica'
    },
    { 
      id: 2,
      sector: 'DGCL - Legales'
    },
    { 
      id: 3,
      sector: 'DGCCON - Normativa'
    },
    { 
      id: 4,
      sector: 'MGEYA - Mesa de entradas'
    },
    { 
      id: 5,
      sector: 'DGPRTGD - Proyectos tecnológicos'
    },
    { 
      id: 6,
      sector: 'DGEGRAL - Escribanía'
    },
    { 
      id: 7,
      sector: 'UAI - Auditoria'
    },
    { 
      id: 8,
      sector: 'SECLYT - Secretaria legal y técnica'
    },

  ];

  private nombre: Nombre[] = [
    {
      id: 1,
      sectorId: 1,
      nombre: 'Daniel	de Almeida'

    },
    {
      id: 2,
      sectorId:  2,
      nombre: 'Dario	Riva'

    },
    {
      id: 3,
      sectorId:  2,
      nombre: 'Diego	Pellegrini'

    },
    {
      id: 4,
      sectorId: 3,
      nombre: 'Federico	Musso'

    },
    {
      id: 5,
      sectorId: 4,
      nombre: 'Laura	Rodriguez'

    },
    {
      id: 6,
      sectorId:  5,
      nombre: 'Lautaro Ariel	Basanta'

    },
    {
      id: 7,
      sectorId: 6,
      nombre: 'Manuel	Castello'

    },
    {
      id: 8,
      sectorId: 7,
      nombre: 'Paula	Barrios'

    },
    {
      id: 9,
      sectorId: 8,
      nombre: 'Rocio	Diaz'

    },
    {
      id: 10,
      sectorId: 7,
      nombre: 'Sebastian	Parasis'

    },
    {
      id: 11,
      sectorId: 6,
      nombre: 'Walter	Marcote'

    },
    {
      id: 12,
      sectorId: 3,
      nombre: 'Guillermo	Balcarcel'

    },
    {
      id: 13,
      sectorId:  5,
      nombre: 'Esteban	Gawron'

    },
    {
      id: 14,
      sectorId:  5,
      nombre: 'Enzo	Peddini'

    },
    {
      id: 15,
      sectorId: 7,
      nombre: 'Andrea	Russo'

    },
    {
      id: 16,
      sectorId: 1,
      nombre: 'Adrian	Zarate'

    },
    {
      id: 17,
      sectorId: 1,
      nombre: 'Melisa	Yune'

    },
    {
      id: 18,
      sectorId: 8,
      nombre: 'Nicolas	Russmann'

    },
    {
      id: 19,
      sectorId: 8,
      nombre: 'Galo	Trillo'

    },
    {
      id: 20,
      sectorId: 3,
      nombre: 'Diego	Pellegrini'

    },

  ];

  getSector(): Sector[]{
    return this.sector;
  }

  getNombres(): Nombre[]{
    return this.nombre;
  }
}
