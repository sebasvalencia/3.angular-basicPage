import { Component, OnInit } from '@angular/core';
import { DogService } from '../service/dog.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  firstDog = '';

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.getDog();
  }

  getDog() {
    return this.dogService.getRandomDog().subscribe(
      (dog) => {
        this.firstDog = dog.message;
      }
    );
  }


}
