import PropTypes from 'prop-types';

export default function Success({ setSubmittedEmail }) {
  return (
    <div>
      <button onClick={() => setSubmittedEmail('')}>Return</button>
    </div>
  );
}

Success.propTypes = {
  setSubmittedEmail: PropTypes.func,
};
