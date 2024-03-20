import React from 'react';
import { styled } from 'styled-components';
import Close from '../icons/Close';

const Container = styled.div`
width: 450px;
background: ${props => props.theme['background-main-color']};
border-radius: 8px;
color: ${props => props.theme['text-main-color']};
`

const Header = styled.div`
padding: 15px;
display: flex;
justify-content: space-between;
font-weight: 700;
`;

const Body = styled.div`
padding: 15px;
`;



const Icon = styled.div`
background: ${props => props.theme['background-icon-color']};
border-radius: 4px;
width: 22px;
height: 22px;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;

`;
export default function Modal(props) {
  const { title, children } = props;
  return (
    <Container>
      <Header>
        <div>{ title }</div>
        <Icon>
          { Close }
        </Icon>
      </Header>
      <Body>
        { children }
      </Body>
    </Container>
  );
}