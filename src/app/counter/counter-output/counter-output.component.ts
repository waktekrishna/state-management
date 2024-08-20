import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{

  counterNum!: number;

  constructor(private store: Store<{ counter: CounterState }>) // Inject the counter state from store
  { }
  

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => { // Select the counter from store and get the data from it
      this.counterNum = data.counter
    })
  }

  // without ngrx
  // @Input() counter: any

}
