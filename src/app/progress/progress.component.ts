import { QuestionsComponent } from './../questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() cc:number;
  constructor(private route:Router,private http:HttpClientModule) {
   }
  ngOnInit(): void {
    //this.http.get("/questions");
    
  }
  getD(charcount){
    debugger;
  }

}
