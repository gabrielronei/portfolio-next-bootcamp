import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/BreakpointsMedia';

export const WrapperProjetosStyle = styled.main`
    width: 100%;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${breakpointsMedia({
    md: css`
            padding: 80px 20px;
        `,
})}
`;

WrapperProjetosStyle.Title = styled.h2`
    font-size: 22px;
    margin-bottom: 20px;
    ${breakpointsMedia({
    md: css`
            font-size: 26px;
            margin-bottom: 30px;
        `,
})}
border-bottom: 2px solid ${({ theme }) => theme.defaultTheme.primary};
`;

WrapperProjetosStyle.Row = styled.div`
    width: 100%;
    max-width: 1080px;
    padding: 20px;
`;
