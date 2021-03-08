import styled from 'styled-components';
import Header from '../src/components/Cabecalho';
import Footer from '../src/components/Footer';
import WrapperProjetos from '../src/components/WrapperProjetos';
import theme from '../src/theme';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.defaultTheme.primary};
`

export default function Home() {
  return (
    <>
      <Header/>
      <WrapperProjetos />
      <Footer/>
    </>
  )
}
