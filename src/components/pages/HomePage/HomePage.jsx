import { useState, useEffect } from 'react';

import * as movieAPI from '../../../services/movie-api';
import { Gallery } from 'components/Gallery/Gallery';

export function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    movieAPI.fetchTrending().then(setData);
  }, []);

  return <>{data && <Gallery data={data} />}</>;
}
