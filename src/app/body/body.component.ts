import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  firstDog = 'https://images.dog.ceo/breeds/hound-basset/n02088238_12160.jpg';
  secondDog = 'https://images.dog.ceo/breeds/beagle/n02088364_11130.jpg';
  constructor() { }

  ngOnInit() {
  }

}
