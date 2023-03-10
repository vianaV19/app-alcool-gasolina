import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alcool!:number; gasolina!:number; resultado:string = "Resultado!";

  km!:number; precoMedio!:number; resKmRodado:string = "Resultado: R$ 0,00" ;

  constructor() {}

  calcular(){
    
    if(this.alcool == null || this.gasolina == null) {alert("Por favor insira algo!"); return;}

    let res = this.alcool / this.gasolina;

    this.resultado = res < 0.7 ? "Melhor utilizar gasolina." : "Melhor utilizar alcool!";
  }

  calcularKmRodados(){
    let res = this.precoMedio / this.km;
    
    this.resKmRodado = `Resultado: R$ ${res.toFixed(2)}`
  }
}
