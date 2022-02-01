import styled from 'styled-components';

export const KoloisOnline = styled.span
  `background-color: ${props => (props.isOnline ? 'red' : 'green')};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 10px;
`;