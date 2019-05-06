import React, { useState } from 'react';
import { History } from 'history';
import styled from 'styled-components';

const AnimatedDiv = styled.div`
  color: #fdbfb3;
  font-size: 16px;
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
`

interface AnimateUrlProps {
  text: string;
  history: History;
}

const maxCycles = 100;

const AnimateUrl: React.FunctionComponent<AnimateUrlProps> = ({ text, history }) => {
  const [animating, toggleAnimating] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number>();
  const [error, setError] = useState<string>();

  const animate = () => {
    const formattedText = text.replace(/\s/gi, "_");
    if (formattedText.length >= maxCycles) {
      setError('Text is too long.');
      return;
    } else {
      setError('');
    }
    if (formattedText) {
      toggleAnimating(true);
      let cycles = maxCycles - formattedText.length;
      const interval = setInterval(() => {
        let frontText = '';
        if (cycles < 0) {
          for (let i = formattedText.length - 1; i > formattedText.length + cycles; i--) {
            frontText = formattedText[i] + frontText;
          }
        }
        const frontFiller = '_'.repeat(maxCycles - cycles - formattedText.length - frontText.length);
        const endFiller = cycles > 0 ? '_'.repeat(cycles) : '';
        const middleText = cycles > 0 ? formattedText : formattedText.substr(0, formattedText.length + cycles);
        history.replace(frontText + frontFiller + middleText + endFiller);
        cycles -= 1;
        if (cycles < -formattedText.length) {
          cycles = maxCycles - formattedText.length;
        }
      }, 100);
      setIntervalId(interval);
    }
  };

  if (animating) {
    return (
      <div>
        <AnimatedDiv>Animating...</AnimatedDiv>
        <StyledButton
          onClick={() => {
            clearInterval(intervalId);
            toggleAnimating(false);
          }}
        >
          Stop
        </StyledButton>
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
