# 🎬 MovieApp — Mobile Applications Development Project

![Ionic](https://img.shields.io/badge/Ionic-7.2.0-blue?logo=ionic)
![Angular](https://img.shields.io/badge/Angular-Standalone-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![TMDB](https://img.shields.io/badge/API-TMDB-brightgreen)

A mobile application built with **Ionic Framework v7.2.0** and **Angular (Standalone Components)** as part of the Higher Diploma in Science – Computing (Software Development) at **Atlantic Technological University**.

The app connects to [The Movie Database (TMDB)](https://www.themoviedb.org/) API to browse trending movies, search by title, explore cast and crew, and manage a personal favourites list.

---

## 📱 Features

### Core Functionality
- **Today's Trending Movies** — automatically loaded on app start
- **Movie Search** — search by title with results displayed in real time; supports Enter key and Search button
- **Movie Details** — full overview, release year, vote rating, cast and crew
- **Person Details** — biography, date of birth, date of death, also known as, and full filmography
- **Favourites List** — add or remove movies with persistent storage across sessions

### Innovation Features
- ⭐ **Vote Ratings** — displayed on movie cards and details page using TMDB's `vote_average`
- 📅 **Release Year** — shown on each movie card using `release_date`
- ⌨️ **Search on Enter Key** — triggers search without requiring a button click

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| Ionic Framework v7.2.0 | Mobile UI components and routing |
| Angular (Standalone) | Component architecture, data binding |
| TypeScript | Type-safe development |
| RxJS | HTTP Observable handling |
| Capacitor Preferences | Persistent local storage |
| TMDB API | Movie data source |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── home/                  # Home page — trending movies and search
│   ├── movie-details/         # Movie details — overview, cast, crew
│   ├── details/               # Person details — biography and filmography
│   ├── favourites/            # Favourites list
│   └── services/
│       ├── MovieService.ts    # All TMDB API calls
│       ├── FavoritesService.ts # Favourites persistence logic
│       └── DataService.ts     # Shared state between pages
├── assets/
│   └── mytest.json
├── environments/
│   └── environment.example.ts # Template — copy and add your API key
├── GitLink.pdf
└── innovation.pdf
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Ionic CLI

```bash
npm install -g @ionic/cli
```

### Installation

**1. Create a fresh Ionic project:**
```bash
ionic start MovieApp blank --type=angular-standalone
cd MovieApp
```

**2. Replace the `src` folder** with the one from this repository.

**3. Install dependencies:**
```bash
npm install @capacitor/preferences
```

**4. Configure environment variables:**

Copy `src/environments/environment.example.ts` to `src/environments/environment.ts` and add your TMDB API key:

```typescript
export const environment = {
  production: false,
  apiKey: 'YOUR_TMDB_API_KEY_HERE',
  apiBaseUrl: 'https://api.themoviedb.org/3',
  apiImageUrl: 'https://image.tmdb.org/t/p/w500'
};
```

> Get a free API key at [themoviedb.org](https://www.themoviedb.org/settings/api)

**5. Run the app:**
```bash
ionic serve
```

---

## 🔌 API Endpoints Used

| Endpoint | Purpose |
|---|---|
| `/trending/movie/day` | Today's trending movies |
| `/search/movie?query=` | Search movies by keyword |
| `/movie/{id}/credits` | Cast and crew for a movie |
| `/person/{id}` | Person biography and details |
| `/person/{id}/movie_credits` | Filmography for a person |

---

## 📸 App Pages

### Home Page
Displays trending movies on load. Supports search by title — results update on button click or Enter key press. Each movie card shows the poster, overview, release year and vote rating.

### Movie Details Page
Shows the movie overview, release year, vote rating and full cast and crew. Users can add or remove the movie from their favourites list. The button label updates dynamically based on current favourites state.

### Person Details Page
Shows profile photo, biography, date of birth, date of death (if applicable), also known as names, and a list of other movies the person has appeared in. Clicking any movie opens its details page.

### Favourites Page
Lists all movies the user has saved. Favourites are stored persistently using `@capacitor/preferences` and survive app restarts. Each entry has a Details button that navigates to the Movie Details page.

---

## 🧠 Technical Highlights

- **Standalone Angular Components** — no NgModule architecture; each component declares its own imports
- **`ionViewWillEnter` lifecycle hook** — used instead of `ngOnInit` to ensure data refreshes correctly when navigating back to a page that Ionic keeps in memory
- **Shared DataService** — used to pass selected movie and person objects between pages reliably, solving the Ionic route reuse limitation with navigation state
- **`@capacitor/preferences`** — chosen over `@ionic/storage-angular` for full compatibility with Angular's standalone/AOT compilation mode
- **Graceful image fallback** — missing cast/crew profile images are replaced with "No image" text using Angular's `*ngIf` and the `(error)` event

---

## 👨‍💻 Author

**Pablo Embarach Boeira**  
Higher Diploma in Science – Computing (Software Development)  
Atlantic Technological University  

- 📧 pabloembarach@gmail.com  
- 💼 [LinkedIn](https://linkedin.com/in/pablo-embarach-boeira)  
- 🐙 [GitHub](https://github.com/PEmbarach)

---

## 📄 Licence

This project was developed for academic purposes as part of the Mobile Applications Development module at ATU.