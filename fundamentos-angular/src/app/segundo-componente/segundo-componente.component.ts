import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNascimento = "1995-03-21";
  urlImagem = "/assets/joao.jpg";
  mostrarDataNascimento(){
    alert(`A data de nascimento do João é : ${this.dataNascimento}`)
  }
}