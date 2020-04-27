export interface Nombre {
    id: number;
    nombre: string;
    sectorId: number;
};

export interface Sector {
    id: number;
    sector: string;
}

export interface Persona {
    apellido: string,
    nombres: string,
    fechaNacimiento: string,
    mensaje: string
}


export interface Historial {
    id: number,
    fecha: Date,
    nombre: string
}