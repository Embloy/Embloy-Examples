import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  makeRequest() {
    this.apiService.makeRequest().subscribe(
      data => console.log('Response:', data),
      error => console.error('Error:', error)
    );
  }

  title = 'angular-test';
}