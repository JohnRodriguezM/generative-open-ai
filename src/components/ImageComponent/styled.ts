import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ImageContainer = styled.section`
  margin: 2rem auto;
  place-content: center;
  place-items: center;
  gap:1rem;
  display: grid;
  grid-template-columns: auto ;
  @media(min-width:500px){
    grid-template-columns: auto auto;
  }
  @media(min-width:800px){
    grid-template-columns: auto auto auto auto;
  }
`

export const ImageStyled = styled(LazyLoadImage)`
  border-radius: 10%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;