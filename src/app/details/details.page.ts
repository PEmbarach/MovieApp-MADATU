import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MovieService } from '../services/MovieService';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { heart, homeOutline } from 'ionicons/icons';
import { DataService } from '../services/DataService';
import { ViewWillEnter } from '@ionic/angular';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonThumbnail,
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonImg, 
  IonButton, 
  IonIcon, 
  IonButtons, 
  IonList, 
  IonInput, 
  IonItem
} from '@ionic/angular/standalone'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [   IonHeader, IonToolbar, IonTitle, 
    IonContent, IonImg, CommonModule, 
    IonButton, IonIcon, IonButtons, 
    IonList, IonInput, IonItem, 
    FormsModule,  IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonLabel, IonThumbnail, CommonModule, FormsModule]
})
export class DetailsPage implements ViewWillEnter {
  person:any = [];
  credits:any[] = [];
  imageBaseUrl: string = environment.apiImageUrl;

  constructor(private movieService: MovieService, private router:Router, private dataService:DataService) { 
    addIcons({heart, homeOutline})
  }

  ionViewWillEnter() {
    this.person = this.dataService.selectedPerson;
    this.movieService.getPersonDetails(this.person.id).subscribe((data:any) => {
      this.person = data;
    });
    this.movieService.getPersonMovieCredits(this.person.id).subscribe((data:any) => {
      this.credits = data.cast;
    });
  }

  goToFavourites(){
    this.router.navigate(['/favourites']);
  }
  
  goToHomePage(){
    this.router.navigate(['/home']);
  }

  goToMovieDetails(movie: any){
    this.dataService.selectedMovie = movie;
    this.router.navigate(['/movie-details']);
  }
}
