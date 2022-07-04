import { useState, lazy, useEffect } from 'react';
import * as movieAPI from '../../../services/movie-api';
import { Gallery } from 'components/Gallery.jsx/Gallery';

import { SearchForm, Button, Label, Input } from './MoviesPage.styled';
import { useSearchParams, useLocation } from 'react-router-dom';

const NotFoundPage = lazy(() => import('../NotFound/NotFoundPage.jsx'));

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  let [_, setSearchParams] = useSearchParams();
  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value);
  };
  const { search } = useLocation();

  useEffect(() => {
    if (!search) {
      return;
    }
    movieAPI.fetchSearch(search.slice(7)).then(setData);
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    const normalizeSearchQuery = searchQuery.trim().toLowerCase();
    if (!normalizeSearchQuery) {
      return;
    }
    movieAPI.fetchSearch(normalizeSearchQuery).then(setData);
    setSearchParams(`query=${normalizeSearchQuery}`);
    // setSearchQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button type="submit">
          <Label>Search</Label>
        </Button>
      </SearchForm>
      {data?.results?.length ? <Gallery data={data} /> : <NotFoundPage />}
    </>
  );
}
