import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { singUpStart } from '../../redux/user/user.actions';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { singUpStart } = this.props;

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

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Create account using email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  singUpStart: (email, password, displayName) =>
    dispatch(singUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
