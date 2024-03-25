import styled from 'styled-components';

import { useState } from 'react';
import { PaleNavy } from '../lib/colors';
import Success from '../components/Home/success';
import Form from '../components/Home/form';

const MainContainer = styled.div`
  background-color: ${PaleNavy};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const [submittedEmail, setSubmittedEmail] = useState('');

  return (
    <MainContainer>
      {submittedEmail ? (
        <Success setSubmittedEmail={setSubmittedEmail} />
      ) : (
        <Form setSubmittedEmail={setSubmittedEmail} />
      )}
    </MainContainer>
  );
}
