import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/BreakpointsMedia';

export const CabecalhoWrapper = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

CabecalhoWrapper.Navbar = styled.nav`
    width: 100%;
    padding: 20px 20px;
    background-color: ${({ theme }) => theme.defaultTheme.backgroundPrimary};
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    ${breakpointsMedia({
    sm: css`
      flex-direction: row;
      flex-wrap: wrap;
    `,
  })}
`;

CabecalhoWrapper.ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  ${breakpointsMedia({
    sm: css`
      width: auto;
      margin-top: 0px;
    `,
  })}
  list-style: none;
`;

CabecalhoWrapper.li = styled.li`
  padding: 0 5px;
  ${breakpointsMedia({
    sm: css`
      margin-top: 0px;
      padding: 0 10px;
    `,
  })}
`;

CabecalhoWrapper.Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.defaultTheme.color};
  ${breakpointsMedia({
    sm: css`
      font-size: 15px;
    `,
  })}
  &:hover {
    color: ${({ theme }) => theme.defaultTheme.primary};
  }
`;