import { Component } from '@angular/core';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class Filme {

  alternarFavorito() {
    this.filme1.favorito = !this.filme1.favorito
  }

  filme1 = {
    nome: "A origem",
    imagem: "/A origem.jpg",
    sinopse: "Um mundo onde sonhos compartilhados são possíveis.",
    favorito: false
  }

  // filme2 = {
  //   nome: "Interstellar",
  //   imagem: "/Interstellar.jpg",
  //   sinopse: "Uma viagem sem volta pelo universo."
  // }

  // filme3 = {
  //   nome: "2012",
  //   imagem: "/2012.jpg",
  //   sinopse: "O fim do mundo em 2012."
  // }
}
