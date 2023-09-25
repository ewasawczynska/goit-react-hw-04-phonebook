import styled from 'styled-components';

export const InputFiltrStyled = styled.input`
  border: none;
  border-bottom: 1px dotted grey;
  margin-left: 10px;
  text-align: center;
  width: 200px;

  &:placeholder-shown {
    text-align: center;
  }
`;
export const LabelFiltrStyled = styled.label`
  font-style: italic;
`;
