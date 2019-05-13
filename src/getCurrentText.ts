interface getTextArgs {
  text: string;
  maxLength: number;
  currentCycle: number;
}

const getCurrentText: (args: getTextArgs) => string = ({ text, maxLength, currentCycle }) => {
  let frontText = '';
  if (currentCycle < 0) {
    for (let i = text.length - 1; i > text.length + currentCycle; i--) {
      frontText = text[i] + frontText;
    }
  }
  const frontFiller = '_'.repeat(maxLength - currentCycle - text.length - frontText.length);
  const endFiller = currentCycle > 0 ? '_'.repeat(currentCycle) : '';
  const middleText =
    currentCycle > 0 ? text : text.substr(0, text.length + currentCycle);
  return frontText + frontFiller + middleText + endFiller;
};

export default getCurrentText;
