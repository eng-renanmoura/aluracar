import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private carros;
  constructor(public navCtrl: NavController) {
    this.carros=[
      {nome:"Golf", preco:"12000"},
      {nome:"Palio", preco:"300"}
    ];
  }

}
