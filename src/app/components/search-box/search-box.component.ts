import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  template: `
    <div class="search-box">
      <input
        type="text"
        placeholder="รหัสวิชา, ชื่อวิชา (Eng)"
        [formControl]="searchInp"
      />
    </div>
  `,
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  searchInp = new FormControl('');

  @Output() searchText = new EventEmitter<string>();

  private compDestroy = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.searchInp.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        takeUntil(this.compDestroy)
      )
      .subscribe(value => {
        this.searchText.emit((value || '').trim());
      });
  }

  ngOnDestroy(): void {
    this.compDestroy.next();
    this.compDestroy.complete();
  }
}
