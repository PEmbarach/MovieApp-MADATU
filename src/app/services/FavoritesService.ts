import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor() {
  }

  async addFavourites(movie: any) {
    const favourites = await this.getFavourites();
    favourites.push(movie);
    await Preferences.set({ key: 'favourites', value: JSON.stringify(favourites) });
  }

  async removeFavoutire(movieID: number) {
    const favourites = await this.getFavourites();
    const update = favourites.filter((m: any) => m.id !== movieID);
    await Preferences.set({ key: 'favourites', value: JSON.stringify(update) });
  }

  async getFavourites() {
    const result = await Preferences.get({ key: 'favourites' });
    return result.value ? JSON.parse(result.value) : [];
  }

  async isFavourite(movieID: number) { 
    const favourites = await this.getFavourites();
    return favourites.some((m: any) => m.id == movieID);
  }

}
