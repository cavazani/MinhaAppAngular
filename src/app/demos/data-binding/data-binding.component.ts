import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
 
  public contadorClique: number = 0;
  public urlImagem: string = "https://material.angular.io/components/icon/overview#icon-overview";

  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

   KeyUp(event: any){  //ANY é quando voce não sabe o que vai trabalhar e pode receber qualquer coisa
    this.nome = event.target.value;
  } 

}


