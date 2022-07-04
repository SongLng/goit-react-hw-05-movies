import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const ImageThumb = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: flex-end;
  flex-basis: 100%;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  width: 500px;
  height: auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: fit-content;
`;

export const Title = styled.h2`
  font-weight: 700;
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const OverviewText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
