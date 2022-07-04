import { useState, useEffect } from 'react';
import * as movieAPI from '../../../services/movie-api';

export default function Review({ movieId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    movieAPI.fetchReview(movieId).then(setData);
    return () => {
      setData(null);
    };
  }, [movieId]);
  return <>{data?.results?.length ? <ReviewData data={data} /> : <NoData />}</>;
}

function NoData() {
  return <>Nothing found</>;
}

function ReviewData({ data }) {
  return (
    <>
      <ul>
        {data.results.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>Review: {review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
