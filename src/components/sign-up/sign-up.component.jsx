import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { singUpStart } from '../../redux/user/user.actions';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = ({ singUpStart }) => {
  const [userCredentials, setUserCredentilas] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserCredentilas({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    singUpStart(email, password, displayName);

    // try {
    //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //     await createUserProfileDocument(user, {displayName});
    //     this.setState({
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: ''
    //     })
    // } catch(error) {
    //     console.error(error);
    // }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Create account using email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  singUpStart: (email, password, displayName) =>
    dispatch(singUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
