import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-intro',
  templateUrl: './test-intro.component.html',
  styleUrls: ['./test-intro.component.scss']
})

export class TestIntroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }  
  init(){
    this.router.navigate(["questions"]);
  }
}
