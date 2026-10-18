import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Dashboard } from './dashboard/dashboard';
import { Transaction } from './transaction/transaction';

@Component({
  imports: [Header, Dashboard, Transaction],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('finance-tracker');
}
