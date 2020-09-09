import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  font-size: 2rem;
  margin: 1.5rem 2.5rem;
  cursor: pointer;

  @media only screen and (max-width: 50em) {
    margin: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  @media only screen and (max-width: 50em) {
    height: 5rem;
    margin-bottom: 3rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 50em) {
    width: 5rem;
    margin-left: 1rem;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-transform: uppercase;

  @media only screen and (max-width: 50em) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
