import { useState, useEffect } from 'react';
import * as movieAPI from '../../../services/movie-api';
import { Board, Card, Image, Text } from './Cast.styled';

export default function Cast({ movieId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    movieAPI.fetchCast(movieId).then(setData);
    return () => {
      setData(null);
    };
  }, [movieId]);
  return (
    <>
      <Board>
        {data &&
          data.cast.map(({ original_name, character, profile_path, id }) => {
            return (
              <Card key={id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                />
                <Text>Name: {original_name}</Text>
                <Text>Character: {character}</Text>
              </Card>
            );
          })}
      </Board>
    </>
  );
}
