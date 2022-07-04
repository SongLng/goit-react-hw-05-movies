import styled from '@emotion/styled';

export const Board = styled.ul`
  margin: -10px;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5 - 20px);
  margin: 10px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 180px;
  height: auto;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
