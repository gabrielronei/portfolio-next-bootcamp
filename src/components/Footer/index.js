import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${({ theme }) => theme.defaultTheme.backgroundPrimary};
`;

FooterWrapper.Link = styled.a`
    color: ${({ theme }) => theme.defaultTheme.color};
    padding: 10px 10px;
    text-decoration: none;
    line-height: 0;
    &:hover {
        color: ${({ theme }) => theme.defaultTheme.primary};
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterWrapper.Link
                href="https://github.com/gabrielronei"
                target="_blank"
            >
                <img src='./github.svg' />
            </FooterWrapper.Link>
        </FooterWrapper>
    );
}