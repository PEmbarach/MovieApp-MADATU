import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/MovieService';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/DataService';
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
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, 
    IonContent, IonImg, CommonModule, 
    IonButton, IonIcon, IonButtons, 
    IonList, IonInput, IonItem, 
    FormsModule,  IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonLabel, IonThumbnail,
  ],
})
export class HomePage implements OnInit {
  movies:any[] = [];
  imageBaseUrl: string = environment.apiImageUrl;
  searchQuery:string = '';

  constructor(private movie: MovieService, private router:Router, private dataService:DataService) {
    addIcons({ heart });
  }

  ngOnInit(){
    this.movie.getTrendingMovies().subscribe((data:any) => {
      this.movies = data.results; 
    });
  }

  onSearch(){
    if (this.searchQuery == '') {
      this.movie.getTrendingMovies().subscribe((data:any) =>{
        this.movies = data.results;
      });
    } else {
      this.movie.searchMovies(this.searchQuery).subscribe((data:any) =>{
        this.movies = data.results;
      });
    }
  }

  goToMovieDetails(movie: any) {
    this.dataService.selectedMovie = movie;
    this.router.navigate(['/movie-details']);
  }

  goToFavourites(){
    this.router.navigate(['/favourites']);
  }

}

