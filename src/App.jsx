import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: cyan;
`;

const StyleApp = styled.main`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <H1>The Wild Oasis</H1>
        <Button
          onClick={() => {
            alert('check in ding');
          }}
        >
          check in
        </Button>
        <Button
          onClick={() => {
            alert('check out ding');
          }}
        >
          check out
        </Button>
        <Input type="number" placeholder="Number of Guests" />
      </StyleApp>
    </>
  );
}

export default App;
