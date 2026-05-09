import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MovieService } from '../services/MovieService';
import { addIcons,  } from 'ionicons';
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
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [   IonHeader, IonToolbar, IonTitle, 
    IonContent, IonImg, CommonModule, 
    IonButton, IonIcon, IonButtons, 
    IonList, IonInput, IonItem, 
    FormsModule,  IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonLabel, IonThumbnail, CommonModule, FormsModule]
})
export class MovieDetailsPage implements ViewWillEnter {
  movie:any = [];
  cast:any[] = [];
  crew:any[] = [];
  imageBaseUrl: string = environment.apiImageUrl;
  
  constructor(private movieService: MovieService, private router:Router, private dataService:DataService) {
    addIcons({heart, homeOutline})
  }

  ionViewWillEnter() {
    this.movie = this.dataService.selectedMovie;
    this.movieService.getMovieCredits(this.movie.id).subscribe((data:any) => {
      this.cast = data.cast;
      this.crew = data.crew;
    });
  }

  goToPersonDetails(person:any){
    this.dataService.selectedPerson = person;
    this.router.navigate(['/details'])
  }

  goToFavourites(){
    this.router.navigate(['/favourites']);
  }
  
  goToHomePage(){
    this.router.navigate(['/home']);
  }
}
