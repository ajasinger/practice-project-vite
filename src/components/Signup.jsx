import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Simple password validation (at least 6 characters)
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Handle successful submission
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset the form or perform login action here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
