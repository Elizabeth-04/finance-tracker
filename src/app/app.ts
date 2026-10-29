import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Dashboard } from './dashboard/dashboard';
import { Transaction } from './transaction/transaction';
import { AddTransaction } from './add-transaction/add-transaction';
import { Analytics } from './analytics/analytics';

type Page = 'home' | 'transactions' | 'add' | 'analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Footer,
    Dashboard,
    Transaction,
    AddTransaction,
    Analytics,
  ],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class App {
  protected page: Page = 'home';
  protected navigate(page: Page) {
    this.page = page;
  }
}
