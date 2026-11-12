import { Component, input, output, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-transaction-card',
  styleUrl: './transaction-card.scss',
  templateUrl: './transaction-card.html',
})

export class TransactionCard {
  readonly transaction = input.required<any>();
  readonly expanded = model(false);
  readonly remove = output<number>();
  protected toggleDetails(): void {
    this.expanded.update((value) => !value);
  }

  protected removeTransaction(): void {
    this.remove.emit(this.transaction().id);
  }
}