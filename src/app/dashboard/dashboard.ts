
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  @Output() openAll = new EventEmitter<void>();
  @Output() addNew = new EventEmitter<void>();
  protected categories = [
    { name: 'Продукты', amount: 28500, color: '#208c67' },
    { name: 'Транспорт', amount: 12600, color: '#43a8f2' },
    { name: 'Развлечения', amount: 8700, color: '#9861ed' },
    { name: 'Жильё и ЖКХ', amount: 11200, color: '#ffad42' },
    { name: 'Здоровье', amount: 7500, color: '#39aeb3' },
  ];
  protected transactions = [
    {
      id: 1,
      date: '30 окт 2026',
      category: 'Продукты',
      description: 'Пятёрочка',
      method: 'Карта',
      amount: 2480,
      type: 'expense',
    },
    {
      id: 2,
      date: '29 окт 2026',
      category: 'Транспорт',
      description: 'Метро',
      method: 'Карта',
      amount: 120,
      type: 'expense',
    },
    {
      id: 3,
      date: '28 окт 2026',
      category: 'Развлечения',
      description: 'Кино',
      method: 'Карта',
      amount: 850,
      type: 'expense',
    },
    {
      id: 4,
      date: '27 окт 2026',
      category: 'Зарплата',
      description: 'ООО Ромашка',
      method: 'Карта',
      amount: 86500,
      type: 'income',
    },
  ];
  protected money(n: number) {
    return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
  }
}

