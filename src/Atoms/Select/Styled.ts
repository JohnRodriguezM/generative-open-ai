import { ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Select = styled.input<any>`
    display: block;
  width: 100%;
  padding: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  border-radius: 0.375rem;
  background-color: #edf2f7;
  border: 1px solid #edf2f7;
  color: #4a5568;
  ::placeholder {
    color: #a0aec0;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(66, 153, 225, 0.5);
    border-color: #42c1f3;
  }
  transition: all 0.15s ease-in-out;
  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

export const Container = styled.div<{ sizeWidth?: string }>`
  width: ${({ sizeWidth }) => sizeWidth || '100%'};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const ErrorMessageStyle = styled.span`
  color:red;
  font-weight: bold;
  text-align: center;
  font-size: 1.1rem/* 12px */;
  line-height: 1.2rem/* 16px */;
  margin-top: 1.2rem/* 8px */;
  /*--tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));*/
/*  @media (min-width: 768px) {
    font-size: 1.rem;
  }*/
`;
