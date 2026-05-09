import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewWillEnter } from '@ionic/angular';
import { FavoritesService } from '../services/FavoritesService';
import { Router } from '@angular/router';
import { DataService } from '../services/DataService';
import { environment } from 'src/environments/environment';
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
import { addIcons } from 'ionicons';
import { heart, homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [   IonHeader, IonToolbar, IonTitle, 
    IonContent, IonImg, CommonModule, 
    IonButton, IonIcon, IonButtons, 
    IonList, IonInput, IonItem, 
    FormsModule,  IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonLabel, IonThumbnail, CommonModule, FormsModule]
})
export class FavouritesPage implements ViewWillEnter {
  favourites: any[] = [];
  imageBaseUrl:string = environment.apiImageUrl;

  constructor(private router: Router,
    private dataService: DataService,
    private favouriteService: FavoritesService) 
    {
      addIcons({heart, homeOutline})
  }

  async ionViewWillEnter() {
    this.favourites = await this.favouriteService.getFavourites();
  };

  goToMovieDetails(movie:any){
    this.dataService.selectedMovie = movie;
    this.router.navigate(['movie-details'])
  }

  goToFavourites(){
    this.router.navigate(['/favourites']);
  }
  
  goToHomePage(){
    this.router.navigate(['/home']);
  }
}
