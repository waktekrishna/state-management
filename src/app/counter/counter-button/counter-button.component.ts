import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreament, increament, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {

  constructor(private store: Store<{ counter: CounterState }>) // Inject the counter state from store
  { }

// without ngrx
  // @Output() increament = new EventEmitter<void>()
  // @Output() decreament = new EventEmitter<void>()
  // @Output() reset = new EventEmitter<void>()


  onIncreament() {
    // without ngrx
    // this.increament.emit()

    this.store.dispatch(increament()) // Dispatch the fuction to Action
  }

  onDecreament() {
    // without ngrx
    // this.decreament.emit()

    this.store.dispatch(decreament()) // Dispatch the fuction to Action
  }

  onReset() {
    // without ngrx
    // this.reset.emit()

    this.store.dispatch(reset()) // Dispatch the fuction to Action
  }


}
