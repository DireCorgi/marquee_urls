import * as React from 'react';
import styled from 'styled-components';
import Marquee from 'components/Marquee';

const Container = styled.div`
  padding: 25px;
  flex-grow: 1;
  font-size: 24px;
`;

const Footer = styled.footer`
  background-color: #107595;
  padding: 15px;

  a {
    color: #fff;

    &:hover {
      color: #fff;
    }
  }
`;

const Site = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  height: 100vh;
`;

const Header = styled.h2`
  margin: 0 0 15px;
`;

const Main: React.FunctionComponent = () => {
  return (
    <Site>
      <Container>
        <Header>Marquee URLs</Header>
        <p>
          Let's make some marquee urls! This is largely inspired by{' '}
          <a href="http://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/">
            Animating Urls with Javascript.
          </a>
        </p>
        <Marquee />
      </Container>
      <Footer><a href="https://github.com/DireCorgi/marquee_urls">Created By Frank Ye (DireCorgi)</a></Footer>
    </Site>
  );
};

export default Main;
