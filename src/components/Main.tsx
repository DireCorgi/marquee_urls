import * as React from 'react';
import styled from 'styled-components';
import Marquee from 'components/Marquee';

const Container = styled.div`
  padding: 25px;
  font-size: 24px;
`;

const Main: React.FunctionComponent = () => {
  return (
    <Container>
      <h2>Marquee URLs</h2>
      <p>
        Let's make some marquee urls! This is largely inspired by{' '}
        <a href="http://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/">
          Animating Urls with Javascript.
        </a>
      </p>
      <Marquee />
    </Container>
  );
};

export default Main;
