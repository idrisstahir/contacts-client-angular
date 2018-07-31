import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  infos={
    nom:"Apprenti Jee-Angular",
    email:"apprenti@exemple.com"
  };

  constructor() { }

  ngOnInit() {
  }

}
