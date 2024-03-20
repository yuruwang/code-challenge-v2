import { ThemeProvider } from 'styled-components';
import Modal from './components/Modal';
import Desposit from './components/DespositForm';
import { styled } from 'styled-components';

import { useState } from 'react';


const dark = {
  'text-main-color': '#edf2f9',
  'text-secondary-color': '#657485',
  'text-light-color': '#5b6876',
  'background-main-color': '#202428',
  'background-secondary-color': '#141417',
  'background-icon-color': '#2b3138',
  'border-color': '#363d47',
};

const light = {
  'text-main-color': '#2b3138',
  'text-secondary-color': '#738190',
  'text-light-color': '#7f8e9c',
  'background-main-color': '#ffffff',
  'background-secondary-color': '#ecf2f9',
  'background-icon-color': '#f6fafc',
  'border-color': '#d6dce2',
};


const Page = styled.div`
  background: #f6fafc;
  padding: 20px;
`;

function App() {
  const [theme, setTheme] = useState(dark);
  return (
    <Page>
      <ThemeProvider theme={theme}>
        <Modal title="Deposit ATOM">
          <Desposit />
        </Modal>
      </ThemeProvider>
      <br />
      <button onClick={() => { 
        if (theme === dark) {
          setTheme(light);
        } else {
          setTheme(dark);
        }
      }}>切换主题</button>
    </Page>
  );
}

export default App;
