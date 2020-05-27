import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.css']
})
export class ExerciseThreeComponent implements OnInit {
  profileForm = new FormGroup({
    FullName: new FormControl(''),
    Gander: new FormControl(''),
    CheckBox: new FormControl('')
  });

  Planets: string[] = ['Mars', 'ploto', 'Earth', 'Jupiter'];

  constructor() { }

  ngOnInit(): void {
    
  }

}
