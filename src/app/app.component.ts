import {Component, OnInit} from '@angular/core';
import {AccountsService} from './accounts.service';
import {LoggingService} from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService, LoggingService]
})
export class AppComponent implements OnInit{

  accounts: {name: string, status: string}[] =[];

  constructor(private acccountService: AccountsService){}

  ngOnInit(): void {
    this.accounts = this.acccountService.accounts;
  }


  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
