import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/BreakpointsMedia';

export const CapaWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
    background-size: cover;
    background-position: center bottom;
`;

CapaWrapper.Box = styled.div`
  width: 100%;
    max-width: 860px;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${breakpointsMedia({
    md: css`
            flex-direction: row;
            padding: 80px 20px;
            justify-content: space-around;
            align-items: center;
        `,
  })}
`;

CapaWrapper.Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 15px;
    ${breakpointsMedia({
    md: css`
        margin-bottom: 0px;
      `,
  })}
`;

CapaWrapper.Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: 10px 20px;
    text-align: center;
    ${breakpointsMedia({
    md: css`
        padding-left: 50px;
        text-align: initial;
        width: 80%;
      `,
  })}
`;

CapaWrapper.Titulo = styled.h1`
    font-size: 22px;
    margin-bottom: 6px;
    ${breakpointsMedia({
    md: css`
        font-size: 26px;
        margin-bottom: 10px;
      `,
  })}
`;

CapaWrapper.Subtitulo = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.defaultTheme.primary};
  ${breakpointsMedia({
    md: css`
        font-size: 20px;
      `,
  })}
`;

CapaWrapper.Descricao = styled.p`
  font-size: 15px;
  line-height: 22px;
  font-weight: 300;
  min-height: 10rem;
  ${breakpointsMedia({
    md: css`
        min-height: 3rem;
        font-size: 16px;
        line-height: 24px;
      `,
  })}
`;