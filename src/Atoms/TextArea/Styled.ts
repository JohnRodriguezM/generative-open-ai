import { ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Input = styled.input<any>`
  width: 100%;
  height: 20px;
  background: transparent;
  border: 0.5px solid ${({ theme }) => theme.gray_200};
  border-radius: 5px;
  padding: 8px 0;
  padding-left: 8px;
  margin: 6px 0;
  color: ${({ theme }) => theme.neutrals_100};
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
