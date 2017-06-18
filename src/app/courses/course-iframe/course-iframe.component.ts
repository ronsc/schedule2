import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'course-iframe',
  templateUrl: './course-iframe.component.html',
  styles: []
})
export class CourseIframeComponent implements OnInit {
  /**
  * https://stackoverflow.com/questions/38037760/how-to-set-iframe-src-in-angular-2-without-causing-unsafe-value-exception
  */
  // src = 'http://reg6.sut.ac.th/registrar/class_info.asp';
  src = 'http://reg6.sut.ac.th/registrar/class_info_1.asp?coursestatus=O00&facultyid=all&maxrow=50&acadyear=2559&semester=1&CAMPUSID=&LEVELID=&coursecode=523*&coursename=&cmd=2';
  height = 400;

  /**
   * https://stackoverflow.com/questions/35527456/angular-window-resize-event
   * @param event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.height = event.target.innerHeight - 150;
    } else {
      this.height = event.target.innerHeight - 100;
    }
  }

  ngOnInit() {
    this.height = this.getInitHeight();
  }

  private getInitHeight() {
    /**
     * https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
     */
    const body = document.body, html = document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight) - 80;

    return height;
  }
}
