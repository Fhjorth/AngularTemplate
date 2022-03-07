import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTemplate';

  totalCount = 0;

  data1 = [ {
    name: 'John Johnson',
    dept: 'Electrical'
  }, {
    name: 'Jens Jensen',
    dept: 'Mechanical'
  }, {
    name : 'Jim Lasker',
    dept : 'Medical'
  }];

  data2 = [ {
    name: 'John Johnson',
    dept: 'Electrical'
  }, {
    name: 'Jens Jensen',
    dept: 'Mechanical'
  }, {
    name : 'Jim Lasker',
    dept : 'Medical'
  }];

  calCount(count){
    this.totalCount = this.totalCount + count;
  }
}
