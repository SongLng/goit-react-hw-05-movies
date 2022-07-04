const API_KEY = '8a851f7b54845db9a7afea3bd46f2426';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export function fetchTrending() {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
}

export function fetchSearch(query) {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
}

export function fetchDetails(movieId) {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
}

export function fetchCast(movieId) {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export function fetchReview(movieId) {
  fetchGenres();
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}

export async function fetchGenres() {
  if (window.localStorage.getItem('genres')) {
    return;
  }
  const genres = await fetchWithErrorHandling(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );

  window.localStorage.setItem('genres', JSON.stringify(genres));
}
