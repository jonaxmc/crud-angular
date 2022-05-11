import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiciosService } from '../../services/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  id: string | undefined;

  persona!: any;

  constructor( private fb : FormBuilder,
               private servicios : ServiciosService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) { }

  miFormulario : FormGroup = this.fb.group({
    cedula: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correo: ['', Validators.required]
  })


  ngOnInit(): void {

    if( !this.router.url.includes('editar')){

      return;
    }
    this.activatedRoute.params
    .pipe( 
      switchMap(({id})=> this.servicios.obtenerDatoPorID(id))
    )
      .subscribe(res =>{
        console.log(res.payload.id,)
        this.id = res.payload.id
        const id =res.payload.id
        const data = res.payload.data()
        this.persona = {
          id, ...data
        }

     
      })

    this.servicios.obtenerDatos().subscribe(data => {

      this.miFormulario.patchValue({
        cedula: this.persona.cedula,
        nombre: this.persona.nombre,
        apellido: this.persona.apellido,
        correo: this.persona.correo,
      })
    })


  }

  guardar(){
    console.log(this.id)
    if(this.id == undefined){
      this.servicios.guardar(this.miFormulario.value)
    }else{
      this.servicios.editar(this.id, this.miFormulario.value)
    }

    this.router.navigateByUrl('/home')
  }


}
