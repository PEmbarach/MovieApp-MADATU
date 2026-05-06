import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MovieService } from '../services/MovieService';
import { addIcons } from 'ionicons';
import { heart, homeOutline } from 'ionicons/icons';
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
export class MovieDetailsPage implements OnInit {
  movie:any = [];
  cast:any[] = [];
  crew:any[] = [];
  imageBaseUrl: string = environment.apiImageUrl;
  
  constructor(private movieService: MovieService, private router:Router) {
    this.movie = this.router.getCurrentNavigation()?.extras.state?.['movie'];
   }

  ngOnInit() {
    this.movieService.getMovieCredits(this.movie.id).subscribe((data:any) =>{
      this.cast = data.cast;
      this.crew = data.crew;
    })
  }

  goToFavourites(){
    this.router.navigate(['/favourites']);
  }
  
  goToHomePage(){
    this.router.navigate(['/home']);
  }
}
