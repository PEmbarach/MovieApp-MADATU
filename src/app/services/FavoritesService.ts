import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async addFavourites(movie: any) {
    const favourites = await this.getFavourites();
    favourites.push(movie);
    await this.storage.set('favourites', favourites);
  }

  async removeFavoutire(movieID: number) {
    const favourites = await this.getFavourites();
    const update = favourites.filter((m: any) => m.id !== movieID);
    await this.storage.set('favourites', update);
  }

  async getFavourites() {
    return await this.storage.get('favourites') || [];
  }

  async isFavourite(movieID: number) { 
    const favourites = await this.getFavourites();
    return favourites.some((m: any) => m.id == movieID);
  }

}
