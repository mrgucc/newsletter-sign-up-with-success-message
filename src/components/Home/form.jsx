import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form``;

const schema = yup.object().shape({
  userEmail: yup.string().email('Valid email required').required('Valid email required'),
});

export default function Form({ setSubmittedEmail }) {
  const [errMessage, setErrMessage] = useState([]);

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    setErrMessage([]);
    setSubmittedEmail(data.userEmail);
  }

  function onError(errList) {
    const errArr = [];

    for (const [, value] of Object.entries(errList)) {
      errArr.push(value.message);
    }

    setErrMessage(errArr);
  }

  function ErrorComponent() {
    return errMessage.map((err, i) => <span key={`error_${i}`}>{err}</span>);
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        <input {...register('userEmail')} placeholder='email@company.com' />
        {errMessage.length > 0 && <ErrorComponent />}
        <button type='submit'>Submit</button>
      </StyledForm>
    </div>
  );
}

Form.propTypes = {
  setSubmittedEmail: PropTypes.func,
};
