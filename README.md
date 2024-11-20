# Movie Library Application

A responsive, dynamic web application built with **Next.js**, **TypeScript**, and **Tailwind CSS** for exploring and managing movies. The application fetches data from **The Movie Database (TMDb)** API and allows users to search for movies, view detailed information, and manage a favorites list.

---

## **Features**

1. **Home Page**:

   - Displays a grid of trending movies fetched from TMDb API.
   - Each movie card includes:
     - Poster Image
     - Movie Title
     - Release Date
     - Average Rating
   - Includes a button to add/remove movies from the favorites list.

2. **Favorites Page**:

   - Displays the list of movies added to favorites.
   - Uses `localStorage` to persist the favorites list across sessions.
   - Allows users to remove movies from the list.

3. **Movie Details Page**:

   - Provides detailed information about a selected movie:
     - Overview
     - Genres
     - Release Date
     - Budget, Revenue, and Runtime
     - Additional metadata (e.g., Production Companies, Spoken Languages).
   - Dynamically fetches movie details from TMDb API based on the movie's ID.

4. **Search Functionality**:

   - Allows users to search for movies using TMDb API.
   - Displays search results dynamically with a loading spinner for better UX.

5. **Responsive Design**:

   - Tailored layouts for mobile, tablet, and desktop devices.

6. **Client-Side State Management**:
   - State management with React hooks for favorites and movie data.

---

## **Tech Stack**

- **Framework**: [Next.js](https://nextjs.org/) for routing, server-side rendering (SSR), and static site generation (SSG).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first responsive design.
- **TypeScript**: Strong typing with detailed interfaces for API responses.
- **API**: [TMDb API](https://developer.themoviedb.org/) for fetching movie data.

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/movie-library.git
cd movie-library
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Environment Variables**

Create a `.env` file in the root directory with the following content:

```env
NEXT_PUBLIC_API_READ_ACCESS_TOKEN=your_tmdb_api_key
```

### **4. Start the Development Server**

```bash
npm run dev
```

Navigate to `http://localhost:3000` to view the application.

### **5. Build for Production**

```bash
npm run build
```

### **6. Deploy**

- The project can be deployed using [Vercel](https://vercel.com/). Follow the instructions to link your repository and deploy.

---

## **Directory Structure**

```
src/
├── components/          # Reusable UI components
├── pages/               # Next.js page components
│   ├── index.tsx        # Home page
│   ├── favorites.tsx    # Favorites page
│   ├── [id].tsx         # Movie details page (dynamic route)
├── styles/              # Tailwind CSS styles
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

---

## **How It Works**

### **Home Page**

- Fetches trending movies using the TMDb API's `discover/movie` endpoint.
- Displays a grid layout with 3 columns for movies on desktop (responsive down to 1 column on mobile).
- Allows users to search for movies using the TMDb API's `search/movie` endpoint.

### **Favorites Page**

- Retrieves the user's favorite movies from `localStorage`.
- Fetches details for each favorite movie using the TMDb API's `movie/{id}` endpoint.
- Allows users to remove movies from the favorites list.

### **Movie Details Page**

- Dynamically fetches movie details based on the URL parameter (movie ID).
- Displays comprehensive information about the selected movie.

---

## **Key Design Choices**

1. **State Management**:

   - Managed locally using React's `useState` and `useEffect` hooks for simplicity and performance.
   - Persistent data stored in `localStorage`.

2. **API Integration**:

   - Asynchronous data fetching with `fetch` and `async/await`.
   - Detailed error handling for robust API interaction.

3. **Styling**:

   - Fully responsive design with Tailwind CSS, ensuring compatibility across devices.

4. **Dynamic Routing**:
   - Implemented using Next.js's file-based routing system (e.g., `[id].tsx` for movie details).

---

## **Future Enhancements**

- **Infinite Scrolling**: Add infinite scrolling to the homepage for better user experience.
- **Testing**: Integrate unit and integration tests using Jest and React Testing Library.
- **Theme Customization**: Add light and dark mode support.

---

## **Contributing**

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## **Contact**

For any questions or feedback, feel free to reach out:

- **Email**: jimijay.oj@gmail.com
- **GitHub**: [dafejimi](https://github.com/dafejimi)
