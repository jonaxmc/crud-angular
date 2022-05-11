import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Persona } from '../../interfaces/persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listado: Persona[] = [];
  

  constructor( private services: ServiciosService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.services.obtenerDatos()
      .subscribe( res => {
        this.listado = []
        res.forEach((e:any)=>{

          this.listado.push({
            id: e.payload.doc.id,
            ...e.payload.doc.data()
            
          })
        })
      })
  }

  editar(persona:Persona){
    this.services.agregarEdit(persona)
  }
  eliminar(id: string){
    this.services.eliminar(id).then(() =>{
      console.log("Eliminado")

    }, error => {
      console.log(error)
    })
  }
}
