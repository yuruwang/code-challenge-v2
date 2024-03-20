import React from 'react';
import { styled } from 'styled-components';
import Clock from '../icons/Clock';

const Container = styled.div`
background: ${props => props.theme['background-secondary-color']};
border-radius: 4px;
color: ${props => props.theme['text-main-color']};
padding: 8px;
font-size: 10px;
font-weight: 400;
`

const Icon = styled.span`
margin-right: 8px;
font-size: 12px;
display: inline-block;
height: 100%;
line-height: 100%;

svg {
  vertical-align: bottom;
}

`;

const Seconds = styled.span`
border-radius: 100%;
width: 20px;
height: 20px;
margin-right: 10px;
`;


export default function Amount(props) {

  return (
    <Container> 
      <Icon>{ Clock }</Icon>
      <span>Esitmated Time: </span>
      <Seconds>20 seconds</Seconds>
    </Container>
  );
}