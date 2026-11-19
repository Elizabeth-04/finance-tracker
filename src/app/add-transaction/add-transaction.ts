import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';

@Component({
  imports: [FormsModule],
  selector: 'app-add-transaction',
  styleUrl: './add-transaction.scss',
  templateUrl: './add-transaction.html',
})

export class AddTransaction {
  private readonly transactionService = inject(TransactionService);
  protected type = 'expense';
  protected amount: number | null = null;
  protected category = 'Продукты';
  protected description = '';
  protected method = 'Карта';
  protected date = '2026-10-20';
  protected message = '';
  

  protected save() {
  if (!this.amount || this.amount < 1 || !this.date) {
    this.message = 'Укажи сумму больше нуля и дату.';
    return;
  }

  const added = this.transactionService.addTransaction({
    date: this.date,
    category: this.category,
    description: this.description,
    method: this.method,
    amount: this.amount,
    type: this.type,
  });

  if (!added) {
    this.message = 'Проверь заполнение полей.';
    return;
  }

  this.message = 'Операция успешно добавлена.';

  this.amount = null;
  this.description = '';
}
}

