import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {
  @Input() UserName: string;

  constructor() { 
    this.UserName = "{your name}";
  }

  ngOnInit(): void {
  }

  SubmitName(newName){
    this.UserName = newName.value;
  }

}