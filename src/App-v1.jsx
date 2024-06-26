import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyleApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">the wild oasis</Heading>
            <div>
              <Heading as="h2">Check in / out</Heading>
              <Button
                onClick={() => {
                  alert('check in ding');
                }}
              >
                check in
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => {
                  alert('check out ding');
                }}
              >
                check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Forms</Heading>
            <form>
              <Input type="number" placeholder="Number of Guests" />
              <Input type="number" placeholder="Number of Guests" />
            </form>
          </Row>
        </Row>
      </StyleApp>
    </>
  );
}

export default App;
