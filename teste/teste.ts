import { Component } from '@angular/core';

interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
  data: Date;
}

@Component({
  selector: 'app-teste',
  imports: [],
  templateUrl: './teste.html',
  styleUrl: './teste.css'
})
export class Teste {

post: Post = {
  id: 1,
  titulo: "Meu primeiro post",
  conteudo: "Este e o conteudo do post...",
  autor: "Ana",
  data: new Date()
};

posts: Post[] = [
  {
    id: 1,
    titulo: "Angular e incrivel",
    conteudo: "Hoje vamos aprender sobre diretivas e data binding...",
    autor: "Maria",
    data: new Date("2025-09-01")
  },
  {
    id: 2,
    titulo: "Typescript ajuda demais",
    conteudo: "A tipagem forte evita muitos erros e da mais segurança...",
    autor: "João",
    data: new Date("2025-09-05")
  }
];

}
