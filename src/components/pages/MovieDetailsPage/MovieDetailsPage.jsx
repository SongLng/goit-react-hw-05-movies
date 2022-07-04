import { useParams, Link, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import * as movieAPI from '../../../services/movie-api';

import {
  Image,
  Label,
  OverviewText,
  Wrapper,
  Description,
  Title,
  ImageThumb,
} from './MovieDetails.styled';
import placeholderImg from '../../../images/placeholder.bmp';

const Cast = lazy(() =>
  import('../Cast/Cast.jsx' /*webpackChunkName: 'Cast' */)
);
const Review = lazy(() =>
  import('../Review/Review.jsx' /*webpackChunkName: 'Review' */)
);

export default function MovieDetailsPage() {
  const [data, setData] = useState(null);
  const [path, setPath] = useState('/');
  const { movieId } = useParams();

  useEffect(() => {
    movieAPI.fetchDetails(movieId).then(setData);
    return () => {
      setData(null);
    };
  }, [movieId]);

  const location = useLocation();

  useEffect(() => {
    setPath(location?.state?.from + location?.state?.search);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data && (
        <Wrapper>
          <ImageThumb>
            <Image
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                  : placeholderImg
              }
              alt={data.original_title}
              loading="lazy"
            />
          </ImageThumb>
          <Link to={path}>Back</Link>

          <Description>
            <Title>
              {`${data.original_title} (${
                data.release_date
                  ? new Date(data.release_date).getFullYear()
                  : 'no information about release date'
              })`}
            </Title>
            <Label>Overview:</Label>
            <OverviewText>{data.overview}</OverviewText>
            <Label>Genres:</Label>
            <OverviewText>
              {data.genres.map(({ name }) => name).join(', ')}
            </OverviewText>
            <p>
              <Link to="cast">Cast</Link>
            </p>
            <p>
              <Link to="reviews">Reviews</Link>
            </p>
          </Description>
        </Wrapper>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Review movieId={movieId} />} />
        </Routes>
      </Suspense>
    </>
  );
}
