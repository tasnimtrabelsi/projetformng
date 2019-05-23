import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  nom;
   prenon;
   email;
   tab=[];
   
  imgsrc= 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png';
  col=5;
  isactive=true;
  constructor(){}
  ngOnInit(){}
  login(){
    console.log("login")
  }
  val='';
  a='';
  b='';
  addition(){
    console.log(this.a+this.b)
  }
 
   
  
  ajouter(){
    let personne={
      first:this.nom,
      prenon:this.prenon,
      email:this.email
    }
    this.tab.push(personne);
    console.log(this.tab)
  }
}
  
  








  
