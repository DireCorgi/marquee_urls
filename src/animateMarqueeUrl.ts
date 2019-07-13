import getCurrentText from './getCurrentText';
import { History } from 'history';

export interface animateMarqueeUrlArgs {
  text: string;
  maxLength: number;
  history: History;
  handleError?: (error: string) => void;
  handleAnimationStart?: () => void;
  formatText?: (text: string) => string;
}

const animateMarqueeUrl: (args: animateMarqueeUrlArgs) => number | null = ({
  text,
  maxLength,
  history,
  handleError = () => {},
  handleAnimationStart = () => {},
  formatText = txt => txt
}) => {
  const formattedText = formatText(text);
  if (formattedText.length >= maxLength) {
    handleError('Text is too long.');
    return null;
  }
  if (formattedText) {
    handleAnimationStart();
    let cycles = maxLength - formattedText.length;
    const interval = setInterval(() => {
      const currentText = getCurrentText({ text: formattedText, maxLength, currentCycle: cycles });
      history.replace(currentText);
      cycles -= 1;
      if (cycles < -formattedText.length) {
        cycles = maxLength - formattedText.length;
      }
    }, 100);
    return interval;
  } else {
    return null;
  }
};

export default animateMarqueeUrl;