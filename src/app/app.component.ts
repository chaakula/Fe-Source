import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Demo';
  result: any;
  error: any;
  loading: boolean;
  constructor(private appService: AppService) {
  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): any {
    this.loading = false;
    this.appService.loadData().subscribe(result => {
      this.result = result.success;
      this.loading = true;
    },
      error => this.error = <any>error);
  }

}
