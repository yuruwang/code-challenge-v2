import React from 'react';
import { styled } from 'styled-components';
import SelectAccount from './SelectAccount';
import Amount from './Amount';
import EstimatedTime from './EstimatedTime';

const Section = styled.div`
margin-bottom: 12px;
`;

const TranferButton = styled.div`
background: ${props => props.theme['text-main-color']};
border-radius: 4px;
color: ${props => props.theme['background-main-color']};
padding: 14px 0px;
font-size: 14px;
text-align: center;
font-weight: 700;
`;

const CancelButton = styled.div`
color: ${props => props.theme['text-secondary-color']};
font-size: 12px;
text-align: center;
`



export default function Desposit(props) {

  return (
    <div> 
      <Section>
        <SelectAccount />
      </Section>
      <Section>
        <Amount />
      </Section>
      <Section>
        <EstimatedTime />
      </Section>
      <Section>
        <TranferButton>Transfer</TranferButton>
      </Section>
      <Section>
        <CancelButton>Cancel</CancelButton>
      </Section>
    </div>
  );
}