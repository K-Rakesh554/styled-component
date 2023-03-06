import styled from 'styled-components';

export const Input2 = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1rem',
}))`
border:2px solid red;
margin:${(props) => props.size};
padding:${(props) => props.size};
`;

// input attrs for password type

export const PassowrdInput = styled(Input2).attrs({
  type: 'password',
})`
border : 2px solid aqua;`;
