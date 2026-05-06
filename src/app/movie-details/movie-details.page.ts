import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MovieService } from '../services/MovieService';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
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

}
