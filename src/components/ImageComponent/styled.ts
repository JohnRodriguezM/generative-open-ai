import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ImageContainer = styled.section`
  position: relative;
  margin: 2rem auto;
  place-content: center;
  place-items: center;
  gap:1rem;
  display: grid;
  grid-template-columns: auto;
 @media(min-width:610px){
    grid-template-columns: auto auto;
  }
  @media(min-width:1000px){
    grid-template-columns: auto auto auto;
  }
  @media(min-width:1200px){
    grid-template-columns: auto auto auto auto;
  }

  @media(min-width:1500px){
    grid-template-columns: auto auto auto auto auto;
  }
`;
export const ContainerDownload = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: rgba(0,0,0,.7);
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1;
  border-radius: 40%;
  margin-top: 13rem;
  margin-left: -4rem;
  transition: all 0.3s ease-in-out;
  &:hover, &:active {
    background-color: rgba(0,0,0,.9);
    transform: scale(.8);
  }
`
export const DivImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover, &:active {
    transform: scale(.98);
    cursor: pointer;

  }
`
export const ImageStyled = styled(LazyLoadImage)`
  border-radius: 10%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  width: 280px;
  height: 280px;
  object-fit: cover;
`;