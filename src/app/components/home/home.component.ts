import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  agregar(){
    this.router.navigateByUrl('/agregar')
  }

  

}
