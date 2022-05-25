import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  observableCreate() {
    const hello = Observable.create((observer: Observer) => {
      observer.next('hello');
    });
  }
}
