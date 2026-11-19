
import { Injectable, signal, computed, inject } from '@angular/core';
import { transactionConfig } from '../app.config';

type NewTransaction = {
  date: string;
  category: string;
  description: string;
  method: string;
  amount: number;
  type: string;
};

@Injectable({
  providedIn: 'root',
})

export class TransactionService {

  private readonly config = inject(transactionConfig);

  private readonly _transactions = signal<(NewTransaction & { id: number })[]>([
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

  readonly transactions = this._transactions.asReadonly();

  readonly totalCount = computed(
    () => this._transactions().length
  );

  readonly expenseCount = computed(
    () => this._transactions().filter(
      transaction => transaction.type === 'expense'
    ).length
  );

  addTransaction(transaction: NewTransaction): boolean {

    if (
      !transaction.description.trim() ||
      !transaction.category.trim() ||
      !transaction.date ||
      !transaction.method.trim() ||
      transaction.amount <= 0 ||
      transaction.amount > this.config.maxAmount
    ) {
      return false;
    }

    const newTransaction = {
      id: Date.now(),
      ...transaction,
    };

    this._transactions.update(transactions => [
      ...transactions,
      newTransaction,
    ]);

    return true;
  }

  removeTransaction(id: number): void {

    this._transactions.update(transactions =>
      transactions.filter(
        transaction => transaction.id !== id
      )
    );

  }

  updateDescription(id: number, description: string): boolean {

    if (!description.trim()) {
      return false;
    }

    this._transactions.update(transactions =>
      transactions.map(transaction =>
        transaction.id === id
          ? { ...transaction, description: description.trim() }
          : transaction
      )
    );

    return true;
  }

}
