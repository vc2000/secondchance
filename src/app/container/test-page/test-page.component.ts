import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/testService';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  data$ = new Observable<any>();

  constructor(private testService:TestService ) { }

  ngOnInit() {
    this.data$ = this.testService.getData();
    this.data$.subscribe((a)=>{
      console.log(a);
    });
  }

}
