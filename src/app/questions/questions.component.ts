import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  charcount:number=0;
  codcount:number=0;
  engcount:number=0;
  constructor(private route:Router) {
   }
  character=[
    {
      q:"Are u intrested in joining group events",
    },
    {
    q:"Are u intrested to go out with group"
  },
  {
    q:"Will u speak with lot of people in family events"
  }
  ];
  coding=[{
    q:"Can u write a program to generate prime no's within given range"
  },
  {
    q:"Can u write a fibonacci series prog"},
  {
    q:"Can u write a sum of two linked lists program"}];
  english=[{
      q:"IS this sentence correct: There is a apple"
    },
    {
      q:"IS this sentence correct: There is a apple"
    },
    {
      q:"IS this sentence correct: There is a apple"}];
  ngOnInit(): void{
    
  }
  charagree(){
    this.charcount=this.charcount+1;
    console.log(this.charcount);
  }
  disagree(){

  }
  codagree(){
    this.codcount=this.codcount+1;
    console.log(this.codcount);
  }
  engagree(){
    this.engcount=this.engcount+1;
    console.log(this.engcount);
  } 
  evaluate(){
    this.route.navigate(["progress"]);
  }
}
