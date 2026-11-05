import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  standalone: true,
  selector: 'app-transactions',
  styleUrl: './transaction.scss',
  templateUrl: './transaction.html',
})

export class Transaction {
  protected readonly query = signal('');
  protected readonly kind = signal('all');

  protected readonly transactions = signal([
    {
      id: 1,
      date: '30.04.2025',
      category: 'Продукты',
      description: 'Пятёрочка',
      method: 'Карта',
      amount: 2480,
      type: 'expense',
    },
    {
      id: 2,
      date: '29.04.2025',
      category: 'Транспорт',
      description: 'Автобус',
      method: 'Карта',
      amount: 120,
      type: 'expense',
    },
    {
      id: 3,
      date: '28.04.2025',
      category: 'Развлечения',
      description: 'Кино',
      method: 'Карта',
      amount: 850,
      type: 'expense',
    },
    {
      id: 4,
      date: '27.04.2025',
      category: 'Зарплата',
      description: 'ООО Ромашка',
      method: 'Карта',
      amount: 86500,
      type: 'income',
    },
    {
      id: 5,
      date: '26.04.2025',
      category: 'Жильё и ЖКХ',
      description: 'Квартплата',
      method: 'Карта',
      amount: 3200,
      type: 'expense',
    },
  ]);

  protected readonly totalCount = computed(
    () => this.transactions().length,
  );

  protected readonly expenseCount = computed(
    () =>
      this.transactions().filter(
        (transaction) => transaction.type === 'expense',
      ).length,
  );

  protected readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const selectedKind = this.kind();

    return this.transactions().filter(
      (t) =>
        (selectedKind === 'all' || t.type === selectedKind) &&
        [t.category, t.description, t.method]
          .join(' ')
          .toLowerCase()
          .includes(q),
    );
  });

  constructor() {
    effect(() => {
      console.info(
        `Количество операций: ${this.transactions().length}`,
      );
    });
  }

  protected removeTransaction(id: number): void {
    this.transactions.update((items) =>
      items.filter((transaction) => transaction.id !== id),
    );
  }

  protected money(n: number) {
    return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
  }
}
