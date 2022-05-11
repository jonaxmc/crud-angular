import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private persona$ = new Subject<any>();

  constructor( private firestore:AngularFirestore) { }


  guardar(datos:Persona):Promise<any>{
    return this.firestore.collection('personas').add(datos);
  }

  obtenerDatos():Observable<any>{
    return this.firestore.collection('personas').snapshotChanges();
  }

  eliminar(id: string): Promise<any> {
    return this.firestore.collection('personas').doc(id).delete();
  }

  editar(id: any, persona: Persona): Promise<any> {
    return this.firestore.collection('personas').doc(id).update(persona);
  }

  agregarEdit(persona: Persona) {
    this.persona$.next(persona);
  }

  obtenerDatoPorID(id:any):Observable<any>{
    return this.firestore.collection("personas").doc(id).snapshotChanges();
  }
}
