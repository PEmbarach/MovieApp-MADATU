import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedMovie: any = null;
  selectedPerson: any = null;
}
