import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import AnimateUrl from 'components/AnimateUrl';

const TextArea = styled.textarea`
  font-size: 14px;
  height: 80px;
  line-height: 1.4;
  padding: 10px;
  resize: none;
  width: 100%;
`;

const TextCount = styled.div`
  color: #333;
  font-size: 10px;
  margin-top: 5px;
  text-align: right;
`;

const TextAreaWrapper = styled.div`
  display: inline-block;
  margin-bottom: 15px;
  max-width: 480px;
  width: 100%;
`;

const Marquee: React.FunctionComponent = () => {
  const [text, setText] = useState<string>('');

  return (
    <div>
      <TextAreaWrapper>
        <TextArea
          value={text}
          onChange={e => {
            const value = e.currentTarget.value;
            if (value.length <= 100) {
              setText(value);
            }
          }}
          placeholder="Enter some text here and click animate."
        />
        <TextCount>
          Letter count (max 100): <strong>{text.length}</strong>
        </TextCount>
      </TextAreaWrapper>
      <Router>
        <Route>{({ history }) => <AnimateUrl text={text} history={history} />}</Route>
      </Router>
    </div>
  );
};

export default Marquee;
