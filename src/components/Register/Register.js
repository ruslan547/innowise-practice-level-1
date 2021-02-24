import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import Form from '../UI/Form/Form';
import './Register.scss';
import { useAuth } from '../../contexts/AuthContext';

function Register() {
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async ({ email, password }, event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await register(email, password);
      history.push('/');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  };

  const handleChange = (event) => setConfirmPassword(event.target.value);

  return (
    <div className="register">
      <Link className="register__link" to="/signin">
        <div className="register__arrow" />
        Sign in
      </Link>
      {error ? <span>{error}</span> : null}
      <Form onSubmit={handleSubmit}>
        <input type="password" value={confirmPassword} onChange={handleChange} />
        <Button disabled={loading} value="Register" />
      </Form>
    </div>
  );
}

Register.propTypes = {
  setUser: PropTypes.func,
};

export default Register;
