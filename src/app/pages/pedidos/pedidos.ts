import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})
export class PedidosComponent {

  pedido = {
    cliente: '',
    sabor: '',
    tamanho: '',
    quantidade: 1
  };

  sucesso = false;
  erro = '';

  constructor(private http: HttpClient, private router: Router) {}

  irPara(pagina: string) {
    this.router.navigate([pagina]);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  salvar() {
    this.sucesso = false;
    this.erro = '';

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.post('http://localhost:8080/pedidos', this.pedido, { headers }).subscribe({
      next: () => {
        this.sucesso = true;
        this.pedido = { cliente: '', sabor: '', tamanho: '', quantidade: 1 };
      },
      error: () => {
        this.erro = 'Erro ao salvar pedido!';
      }
    });
  }
}