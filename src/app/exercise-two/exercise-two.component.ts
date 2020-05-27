import { Component, OnInit, Input} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
interface Planet {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {

  @Input() UserAge: number;
  selected = null;

  constructor() {
    this.UserAge = null;
   }
  Planets: Planet[] = [
    {value: 1, viewValue: 'Earth'},
    {value: 4.5, viewValue: 'Jupiter'},
    {value: 7, viewValue: 'Mars'}
  ];

  ngOnInit(): void {
  }

  PlanetChoice(newAge, selectedPlanet){
    this.UserAge = newAge.value * selectedPlanet
  }


}
