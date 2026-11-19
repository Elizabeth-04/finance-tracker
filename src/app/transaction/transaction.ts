import { Component, computed, effect, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionCard } from './transaction-card/transaction-card';
import { TransactionService } from '../services/transaction.service';

@Component({
  imports: [FormsModule, TransactionCard],
  standalone: true,
  selector: 'app-transactions',
  styleUrl: './transaction.scss',
  templateUrl: './transaction.html',
})

export class Transaction {
  protected readonly query = signal('');
  protected readonly kind = signal('all');
  private readonly transactionService = inject(TransactionService);
  protected readonly transactions = this.transactionService.transactions;
  protected readonly expandedIds = signal<{ [id: number]: boolean }>({});

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
    this.transactionService.removeTransaction(id);
  }

  protected changeExpanded(id: number, value: boolean): void {
  this.expandedIds.update((items) => ({
    ...items,
    [id]: value,
  }));
}

  protected money(n: number) {
    return n + ' ₽';
  }
}
