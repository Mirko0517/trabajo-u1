import { Component, OnInit } from '@angular/core';
import { CommonModule}  from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonCardSubtitle, IonButton, IonContent, IonItem, IonLabel, IonInput, IonList } from '@ionic/angular/standalone'
import { Circulo } from '../calculo/calculo';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonCardSubtitle, IonButton, IonContent, IonItem, IonLabel, IonInput, CommonModule, FormsModule, IonList]
})
export class CirculoComponent implements OnInit {
  circulo: Circulo = new Circulo("", 0)
  radio: number = 0
  perimetro: string = ""

  constructor() { }

  ngOnInit() { }


  calcularPerimetro() {
    
    this.circulo.perimetro = "El perimetro es " + this.circulo.calcularPerimetro() + " cm";
  }

}


