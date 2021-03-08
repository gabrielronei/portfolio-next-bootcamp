import { WrapperProjetosStyle } from './styles/WrapperProjetosStyle';
import Card from './Card';

export default function WrapperProjetos() {
  return (
    <WrapperProjetosStyle>
      <WrapperProjetosStyle.Title>Meus Projetos</WrapperProjetosStyle.Title>
      <WrapperProjetosStyle.Row>
        <Card />
      </WrapperProjetosStyle.Row>
    </WrapperProjetosStyle>
  );
}