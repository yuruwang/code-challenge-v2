import React from 'react';
import { styled } from 'styled-components';
import Atom from '../icons/Atom';
import User from '../icons/User';
import Arrow from '../icons/Arrow';
import Edit from '../icons/Edit';


  
const Container = styled.div`
justify-content: space-between;
display: flex;
color: ${props => props.theme['text-secondary-color']};
`

const Block = styled.div`
background: ${props => props.theme['background-secondary-color']};
border-radius: 4px;
padding: 12px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Title = styled.div`
font-size: 12px;
margin-bottom: 8px;
font-weight: 600;


`;

const AccountName = styled.div`
font-size: 14px;
overflow: hidden;
flex: 1;
color: ${props => props.theme['text-light-color']};
padding: 0px 5px;
`;

const Account = styled.div`
flex: 1;
`;

const ArrowWrapper = styled.div`
margin: 0px 10px;
font-size: 10px;
width: 10px;
display: flex;
flex-direction: column;
justify-content: flex-end;
`;

const Icon = styled.span`
color: ${props => props.theme['text-main-color']};
background: ${props => props.theme['text-secondary-color']};
border-radius: 100%;
padding: 4px;
width: 16px;
height: 16px;
margin-right: 5px;
font-size: 14px;
display: inline-block;

`;

const ArrowIcon = styled.span`
  height: 48px;
  line-height: 48px;

  svg {
    vertical-align: middle;
  }

`;

export default function SelectAccount(props) {

  return (
    <div> 
      <Container>
        <Account>
          <Title>From Cosmos Hub</Title>
          <Block>
            <Icon>{ Atom }</Icon>
            <AccountName>asdwh...dwddwdw</AccountName>
          </Block>
        </Account>
        <ArrowWrapper>
          <ArrowIcon>
          { Arrow }
          </ArrowIcon>
        </ArrowWrapper>
        <Account>
          <Title>To Osmosis</Title>
          <Block>
            <Icon>{ User }</Icon>
            <AccountName>cwuwif....o23gf92d</AccountName>
            { Edit }
          </Block>
        </Account>

      </Container>
      <div>
      </div>
    </div>
  );
}