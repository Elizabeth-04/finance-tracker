import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-analytics',
  styleUrl: './analytics.scss',
  templateUrl: './analytics.html',
})
export class Analytics {
  protected categories = [
    { name: 'Продукты', amount: 28500, limit: 35000, color: '#208c67' },
    { name: 'Транспорт', amount: 12600, limit: 20000, color: '#43a8f2' },
    { name: 'Развлечения', amount: 8700, limit: 15000, color: '#9861ed' },
    { name: 'Жильё и ЖКХ', amount: 11200, limit: 15000, color: '#ffad42' },
    { name: 'Здоровье', amount: 7500, limit: 10000, color: '#39aeb3' },
  ];
  protected get total() {
    return this.categories.reduce((s, c) => s + c.amount, 0);
  }
  protected money(n: number) {
    return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
  }
  protected percent(n: number) {
    return Math.round((n / this.total) * 100);
  }
}

