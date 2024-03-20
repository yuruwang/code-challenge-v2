import React from 'react';
import { styled } from 'styled-components';
import Atom from '../icons/Atom';

const Container = styled.div`
color: ${props => props.theme['text-secondary-color']};
`
const Header = styled.div`
display: flex;
justify-content: center;
justify-content: space-between;

margin-bottom:12px;
`;
const Title = styled.div`
font-weight: 700;
font-size: 14px;
`;
const Extra = styled.div`
font-size: 12px;
`;
const Num = styled.span`
font-weight: 500;
margin-left: 5px;
`;

const InputContainer = styled.div`
border: 1px solid ${props => props.theme['border-color']};
border-radius: 4px;
height: 50px;
color:  ${props => props.theme['text-main-color']};
display: flex;
justify-content: space-between;
align-items: center;
`;

const Icon = styled.span`
color: ${props => props.theme['text-main-color']};
background: ${props => props.theme['text-secondary-color']};
border-radius: 100%;
padding: 4px;
width: 20px;
height: 20px;
display: inline-block;
`;

const IconWrapper = styled.span`
padding: 10px;
display: inline-block;
border-right: 1px solid ${props => props.theme['border-color']};
`;

const Number = styled.span`
margin-left: 10px;
flex: 1;
`;
const Unit = styled.span`
font-size: 12px;
margin: 0px 5px;
`;
const Rate = styled.span`
font-size: 10px;
color: ${props => props.theme['text-secondary-color']};
margin-right: 10px;
`;

const QuickSelectArea = styled.div`
display: flex;
justify-content: flex-end;
padding: 10px 0px;
`;

const QuickSelect = styled.span`
border-radius: 4px;
background: ${props => props.theme['background-icon-color']};
margin-left: 8px;
padding: 3px 8px;
font-size: 10px;
font-weight: 500;

`;

export default function Amount(props) {

  return (
    <Container> 
      <Header>
        <Title>Select amount</Title>
        <Extra>
          <span>Available</span>
          <Num>2 ATOM</Num>
        </Extra>
      </Header>
      <InputContainer>
        <IconWrapper>
          <Icon>{ Atom }</Icon>
        </IconWrapper>
        <Number>2</Number>
        <Unit>ATOM</Unit>
        <Rate>≈ $1,013</Rate>
      </InputContainer>
      <QuickSelectArea>
        <QuickSelect>Max</QuickSelect>
        <QuickSelect>1/2</QuickSelect>
        <QuickSelect>1/3</QuickSelect>
      </QuickSelectArea>
    </Container>
  );
}