import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import AnimateUrl from 'components/AnimateUrl';

const TextArea = styled.textarea`
  font-size: 14px;
  height: 60px;
  line-height: 1.4;
  max-width: 480px;
  padding: 10px;
  resize: none;
  width: 100%;
`;

const Marquee: React.FunctionComponent = () => {
  const [text, setText] = useState<string>('');

  return (
    <div>
      <TextArea value={text} onChange={e => setText(e.currentTarget.value)} />
      <Router>
        <Route>{({ history }) => <AnimateUrl text={text} history={history} />}</Route>
      </Router>
    </div>
  );
};

export default Marquee;
