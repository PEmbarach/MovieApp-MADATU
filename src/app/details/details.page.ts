import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MovieService } from '../services/MovieService';
import { Router } from '@angular/router';
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
export class DetailsPage implements OnInit {
  person:any = [];
  credits:any[] = [];
  imageBaseUrl: string = environment.apiImageUrl;

  constructor(private movieService: MovieService, private router:Router) { 
    this.person = this.router.getCurrentNavigation()?.extras.state?.['person'];
    addIcons({heart, homeOutline})
  }

  ngOnInit() {
    this.movieService.getPersonDetails(this.person.id).subscribe((data:any) => {
      this.person = data;
    })
    this.movieService.getPersonMovieCredits(this.person.id).subscribe((data:any) =>{
      this.credits = data.cast;
    })
  }

  goToFavourites(){
    this.router.navigate(['/favourites']);
  }
  
  goToHomePage(){
    this.router.navigate(['/home']);
  }

  goToMovieDetails(movie: any){
    this.router.navigate(['/movie-details'], { state: { movie: movie }});
  }
}
