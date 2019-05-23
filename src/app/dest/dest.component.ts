import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-dest',
  templateUrl: './dest.component.html',
  styleUrls: ['./dest.component.scss']
})
export class DestComponent implements OnInit {
tab=[]
personne:FormGroup;
  constructor() {  
  
    this.personne=new FormGroup({
    firstName:new FormControl(''),
    lastname:new FormControl(''),
  }); }



  ngOnInit() {
  }

  register(){
  
    console.log(this.personne.value)
  }
}
