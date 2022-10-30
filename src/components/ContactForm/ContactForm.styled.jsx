import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 12px;
  width: 300px;
  border: 1px solid black;
`;

export const Button = styled.button`
  padding: 6px 10px 1px 10px;
  border: none;
  border-radius: 4px;
  box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.1), 2px 1px 2px rgba(0, 0, 0, 0.08),
    1px 2px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  :active {
    background-color: lightblue;
  }
`;
