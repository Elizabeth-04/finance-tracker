import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add-transaction',
  styleUrl: './add-transaction.scss',
  templateUrl: './add-transaction.html',
})

export class AddTransaction {
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
    this.message = `Демо: операция на ${new Intl.NumberFormat('ru-RU').format(this.amount)} ₽ проверена.`;
  }
}

