import { Component } from '@angular/core';

@Component({
  selector: 'app-expemplo-servicos1',
  templateUrl: './expemplo-servicos1.component.html',
  styleUrl: './expemplo-servicos1.component.css'
})
export class ExpemploServicos1Component {

  nome = "";

  adicionarNome(){
    console.log(`O nome ${this.nome} foi adicionado!`);
  }
}
