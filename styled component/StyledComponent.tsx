import React = require('react');
import styled, { css } from 'styled-components';

export const Title = styled.h1`
font size:1.5rem;
text-align:center;
color:purple;
`;

export const Wrapper = styled.section` padding:4rem;
 background:${({ bg }) => bg};
 margin-top:20px;
 `;

export const Button = styled.button`
 background:${(props: { primary: any }) => (props.primary ? ' red' : 'blue')};
 color: ${(props) => (props.primary ? 'white' : 'yellow')};
 font-size:1em;
 margin:1em;
 padding:0.25em 1em;
 border:2px solid white;
 display:block;
 `;

export const Diffbutton = styled(Button)`
 
 color:white;
 border-color:yellow;
 background:green;
 `;

export const ReversedButton = (props) => (
  <Button {...props} children={props.children.split('').reverse()} />
);

export const Input = styled.input`
padding:2px;
margin:2px;
color: ${(props) => props.inputcolor || 'purple'};
background:lightyellow;
border:1px inset red;
border-radius:2px;
height:25px;
font-size:15px;
font-weight:900;

`;
// checkbox

export const Inputs = styled.input.attrs({ type: 'checkbox' })`
height: 20px;
width: 20px;`;

export const Label = styled.label`
align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  margin-top:10px;
  `;

export const LabelText = styled.span`
  
  ${(props) => {
    switch (props.$mode) {
      case 'dark':
        return css`
        background-color:black;
        color:white;
        ${Inputs}:checked + && {
          color:blue;
        }
        `;
      case 'lite':
        return `
          background-color:green;
          color:red;
          ${Inputs}:checked + && {
            color:yellow;
          }`;

      default:
        return `
        background-color:white;
        color:black;
        ${Inputs}:checked + && {
          color:red;
        }
        `;
    }
  }}`;
