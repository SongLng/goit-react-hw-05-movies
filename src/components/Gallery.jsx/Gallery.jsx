import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FilmCard,
  Board,
  Poster,
  Image,
  Description,
  Title,
  Wrapper,
  Genres,
  ReleaseDate,
  Rating,
  RatingWrapper,
} from './Gallery.styled';
import placeholderImg from '../../images/placeholder.bmp';
import { genresNames } from 'services/genresNames';

export function Gallery({ data }) {
  const { pathname, search } = useLocation();

  const genres = window.localStorage.getItem('genres')
    ? JSON.parse(window.localStorage.getItem('genres'))
    : [];

  return (
    <Board>
      {data &&
        data.results.map(
          ({
            id,
            poster_path,
            original_title,
            vote_average,
            release_date,
            genre_ids,
          }) => {
            return (
              <FilmCard key={id}>
                <Link
                  to={pathname.includes('movies') ? `${id}` : `movies/${id}`}
                  state={{ from: pathname, search: search }}
                >
                  <Poster>
                    <Image
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500${poster_path}`
                          : placeholderImg
                      }
                      alt={original_title}
                      loading="lazy"
                    />
                  </Poster>
                  <Description>
                    <Title>{`Original Title: ${original_title}`}</Title>
                    <Wrapper>
                      <Genres>{`Genres: ${genresNames(
                        genre_ids,
                        genres.genres
                      )}`}</Genres>
                      <ReleaseDate>
                        {`Release Date: ${
                          release_date
                            ? new Date(release_date).getFullYear()
                            : 'no information'
                        }`}
                      </ReleaseDate>
                      <RatingWrapper>
                        Rating:
                        <Rating>{vote_average}</Rating>
                      </RatingWrapper>
                    </Wrapper>
                  </Description>
                </Link>
              </FilmCard>
            );
          }
        )}
    </Board>
  );
}

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
};
