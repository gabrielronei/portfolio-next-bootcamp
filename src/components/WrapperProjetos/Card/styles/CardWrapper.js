import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/BreakpointsMedia';

export const CardWrapper = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    ${breakpointsMedia({
    sm: css`
        flex-direction: row;
        flex-wrap: wrap;
    `,
  })}
`;

CardWrapper.Item = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.defaultTheme.color} 10;
    ${breakpointsMedia({
    sm: css`
        width: 48%;
        margin: 20px 1%;
        text-align: initial;  
    `,
    md: css`
        width: 30.333%;  
        margin: 0 1.5%;
    `,
  })}
  background-color: ${({ theme }) => theme.defaultTheme.backgroundPrimary};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.styles.transition};
    &:hover {
        transform: scale(1.020);
        h4 {
            color: ${({ theme }) => theme.defaultTheme.primary};
        }
    }
`;

CardWrapper.Link = styled.a`
    text-decoration: none;
    height: 100%;
    color: ${({ theme }) => theme.defaultTheme.color};
    color: ${({ theme }) => theme.defaultTheme.color};
`;

CardWrapper.Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-top-left-radius: ${({ theme }) => theme.styles.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.styles.borderRadius};
`;

CardWrapper.Title = styled.h4`
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
`;

CardWrapper.Description = styled.p`
    font-size: 15px;
    line-height: 22px;
    font-weight: 300;
    text-align: center;
    padding: 15px 20px;
`;
