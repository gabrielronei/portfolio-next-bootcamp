import React from 'react';
import Logo from './Logo';
import Capa from './Capa';
import { CabecalhoWrapper } from './styles/CabecalhoWrapper';

const linksPages = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Projetos',
    url: '/projetos',
  },
  {
    texto: 'Contato',
    url: '/contato',
  },
];

export default function Header() {
  return (
    <CabecalhoWrapper>
      <Capa />
      <CabecalhoWrapper.Navbar>
        <Logo/>
        <CabecalhoWrapper.ul>
          {linksPages.map((link) => (
            <CabecalhoWrapper.li key={link.url}>
              <CabecalhoWrapper.Link href={link.url}>
                {link.texto}
              </CabecalhoWrapper.Link>
            </CabecalhoWrapper.li>
          ))}
        </CabecalhoWrapper.ul>
      </CabecalhoWrapper.Navbar>

      
    </CabecalhoWrapper>
  );
}
