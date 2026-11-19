
import { Component, inject } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})

export class Dashboard {
  protected categories = [
    { name: 'Продукты', amount: 28500, color: '#208c67' },
    { name: 'Транспорт', amount: 12600, color: '#43a8f2' },
    { name: 'Развлечения', amount: 8700, color: '#9861ed' },
    { name: 'Жильё и ЖКХ', amount: 11200, color: '#ffad42' },
    { name: 'Здоровье', amount: 7500, color: '#39aeb3' },
  ];

  private readonly transactionService = inject(TransactionService);

  protected readonly transactions = this.transactionService.transactions;
  
  protected money(n: number) {
    return n + ' ₽';
  }
}

