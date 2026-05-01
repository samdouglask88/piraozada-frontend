import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  username = '';
  senha = '';
  erro = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.erro = '';

    this.http.post<any>('http://localhost:8080/auth/login', {
      username: this.username,
      senha: this.senha
    }).subscribe({
      next: (resposta) => {
        localStorage.setItem('token', resposta.token);  // salva o token
        this.router.navigate(['/dashboard']);            // vai pro dashboard
      },
      error: () => {
        this.erro = 'Usuário ou senha incorretos!';
      }
    });
  }
}