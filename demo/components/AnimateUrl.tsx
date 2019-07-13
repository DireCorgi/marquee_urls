import React, { useState } from 'react';
import { History } from 'history';
import styled from 'styled-components';
import { animateMarqueeUrl } from '../../src/index';

const AnimatedDiv = styled.div`
  color: #fdbfb3;
  font-size: 16px;
  margin-top: 5px;
`;

const StyledButton = styled.button`
  background: #107595;
  border: 1px solid #010059;
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
  padding: 5px 10px;
  transition: all 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    background: #010059;
  }
`;

const ErrorDiv = styled.div`
  color: #d25959;
  font-size: 14px;
  margin: 10px 0;
`;

interface AnimateUrlProps {
  text: string;
  history: History;
}

const AnimateUrl: React.FunctionComponent<AnimateUrlProps> = ({ text, history }) => {
  const [animating, toggleAnimating] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number>();
  const [error, setError] = useState<string>();
  const maxCycles = text.length + 5;

  const animate = () => {
    const formatText = (textToFormat: string) => textToFormat.replace(/\s/gi, '_');
    const interval = animateMarqueeUrl({
      text,
      maxLength: maxCycles,
      history,
      handleError: setError,
      handleAnimationStart: () => toggleAnimating(true),
      formatText
    });
    if (interval) {
      setIntervalId(interval);
    }
  };

  if (animating) {
    return (
      <div>
        <StyledButton
          onClick={() => {
            clearInterval(intervalId);
            toggleAnimating(false);
          }}
          >
          Stop
        </StyledButton>
        <AnimatedDiv>Animating...</AnimatedDiv>
      </div>
    );
  } else {
    return (
      <div>
        <StyledButton onClick={animate}>Animate</StyledButton>
        {error && <ErrorDiv>{error}</ErrorDiv>}
      </div>
    );
  }
};

export default AnimateUrl;
