import { Component } from '@angular/core';
import { CommonModule}  from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSelect, IonSelectOption, IonItem, IonLabel } from '@ionic/angular/standalone';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSelect,
    IonSelectOption,
    FormsModule,
    CirculoComponent,
    TrianguloComponent,
    IonItem,
    IonLabel, 
    CommonModule],
})
export class HomePage {
  selectedShape: string = ""
  constructor() { }
}
