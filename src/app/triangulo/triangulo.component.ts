import { Component, OnInit } from '@angular/core';
import { CommonModule}  from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonCardSubtitle, IonList, IonLabel, IonInput, IonButton, IonItem } from '@ionic/angular/standalone'
import { Triangulo } from '../calculo/calculo';


@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonCardSubtitle, IonList, IonLabel, IonInput, IonButton, IonItem, FormsModule, CommonModule]

})
export class TrianguloComponent  implements OnInit {
  triangulo: Triangulo = new Triangulo("", 0, 0, 0)
  lado1: number = 0
  lado2: number = 0
  lado3: number = 0
  perimetro: string = ""

 

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {

    this.triangulo.perimetro = "El perimetro es " + this.triangulo.calcularPerimetro();
  }

}
