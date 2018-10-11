import { Component, OnInit } from '@angular/core';
import { DogService } from '../service/dog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  companyName = `Dog's Company`;
  firstDog = '';

  constructor(private dogService: DogService) { }

  ngOnInit() {
  }

  getRandomDog() {
    return this.dogService.getRandomDog().subscribe(
      (dog) => {
        this.firstDog = dog.message;
        console.log('this.firstDog: ', this.firstDog);
      }
    );
  }


}
