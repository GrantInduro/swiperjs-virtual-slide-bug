import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  records = [];

  ngOnInit(): void {
    this.records = Array.from({ length: 1000 }).map(
      (el, index) => `Slide ${index + 1}`
    );
  }
}
