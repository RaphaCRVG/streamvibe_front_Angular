import { Component } from '@angular/core';
import { Header } from './componentes/header/header';
import { Filme } from './componentes/filme/filme';
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [ Header, Footer, Filme],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'streamvibe';
}
