import styled from '@emotion/styled';

export const Board = styled.ul`
  margin: -10px;
  display: flex;
  flex-wrap: wrap;
`;

export const FilmCard = styled.li`
  width: 100%;
  display: flex;
  flex-basis: calc(100% / 5 - 20px);
  margin: 10px;
  a {
    text-decoration: none;
    color: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Poster = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 10px;
`;

export const Wrapper = styled.div`
  align-items: flex-start;
  flex-direction: column;
`;

export const Genres = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #ff6b08;
`;

export const ReleaseDate = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #ff6b08;
`;

export const RatingWrapper = styled.p`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #ff6b08;
`;

export const Rating = styled.span`
  display: flex;
  margin-left: 10px;
  background: #ff6b01;
  border-radius: 5px;
  width: 36px;
  height: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: rgb(108, 108, 108);
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
