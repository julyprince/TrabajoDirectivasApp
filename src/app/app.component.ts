import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje ='';
  registrado = false;
  nombre = '';
  apellido ='';
  
  registarUSuario(){
    this.registrado=true;
    this.mensaje="usuario registrado"
  }

  /*ng for*/
  entradas:Array<{titulo:string}>;
  constructor(){
    this.entradas =[
      {titulo:"python cada dia mas presente"},
      {titulo:"java presente desde mas de 20 anios"},
      {titulo:"java script cada vez mas funcional"},
      {titulo:"kotlin potencia para tus apps"},
      {titulo:"donde quedo pascal?"}
    ]
  }
}
