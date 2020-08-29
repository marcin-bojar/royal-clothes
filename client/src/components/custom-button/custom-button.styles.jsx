import styled, { css } from 'styled-components';

const importButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return GoogleButtonStyles;
  }

  return props.inverted ? InvertedButtonStyles : buttonStyles;
};

const buttonStyles = css`
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const InvertedButtonStyles = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #fff;
  display: none;

  &:hover {
    background-color: #000;
    color: #fff;
    border: none;
  }
`;

const GoogleButtonStyles = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    color: #fff;
    border: none;
  }
`;

export const CustomButtonContainer = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 3px;
  border: none;
  font-size: inherit;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 16.5rem;
  height: 5rem;
  outline: none;

  ${importButtonStyles}
`;
