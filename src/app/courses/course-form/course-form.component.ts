import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styles: []
})
export class CourseFormComponent implements OnInit {
  /**
   * https://stackoverflow.com/questions/9792427/javascript-regex-parse-string-content-in-curly-brackets
   */
  private codeReg = /\d{6}/g;
  private nameReg = /[A-Z]+/g;
  private unitReg = /\d\s\(\d-\d-\d\)/g;
  private timeReg = /[A-Z][a-z]\d{2}:\d{2}-\d{2}:\d{2}/g;

  data: any;

  parseControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.parseControl = new FormControl();

    this.parseControl.valueChanges
      .subscribe((value: string) =>
        this.data = this.parseData(value.trim())
      );
  }

  private parseData(val: string) {
    if (!val) { return null; }

    let matchValue = val.match(this.codeReg);
    const code: string = matchValue ? matchValue.map(this.toString)[0] : null;

    matchValue = val.match(this.unitReg);
    const unit: number = matchValue ? +matchValue.map(this.toString)[0].substr(0, 1) : null;

    matchValue = val.match(this.timeReg);
    const dateTime: string[] = matchValue ? matchValue.map(this.toString) : [];

    const cleanValue = val
      .replace(this.codeReg, '')
      .replace(this.unitReg, '')
      .replace(this.timeReg, '');

    const name = cleanValue.split('\n').map(v => {
      const names = v.match(/[A-Z]+/g);
      if (!names) { return ''; }

      const joinValue = names.join(' ');
      if (joinValue.length > 5 && !name) {
        return joinValue;
      } else {
        return '';
      }
    }).join('');

    return {
      code,
      name,
      unit,
      dateTime
    };
  }

  private toString(data) {
    return data.toString().trim();
  }

}
