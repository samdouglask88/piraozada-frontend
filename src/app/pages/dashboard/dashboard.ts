import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ResumoService } from '../../services/resumo';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {

  resumo: any = null;
  carregando = true;

  constructor(private resumoService: ResumoService, private router: Router) {}

  ngOnInit() {
    this.resumoService.getResumo().subscribe({
      next: (dados) => {
        this.resumo = dados;
        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
      }
    });
  }

  irPara(pagina: string) {
    this.router.navigate([pagina]);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}