import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  font-size: 2rem;
  margin: 1.5rem 2.5rem;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  // padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  // padding: 2.5rem;
  text-transform: uppercase;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
