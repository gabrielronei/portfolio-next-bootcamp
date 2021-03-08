import { CapaWrapper } from './styles/CapaWrapper';
import Typewriter from 'typewriter-effect';

export default function Capa() {
  return (
    <CapaWrapper>
      <CapaWrapper.Box>
        <CapaWrapper.Image src="https://avatars.githubusercontent.com/u/40907110?v=4" alt="Foto de perfil de Gabriel Ronei" />

        <CapaWrapper.Informacoes>
          <CapaWrapper.Titulo>
            Gabriel Ronei
          </CapaWrapper.Titulo>

          <CapaWrapper.Subtitulo>
            Desenvolvedor Back-end
          </CapaWrapper.Subtitulo>

          <CapaWrapper.Descricao>
            <Typewriter
              options={{
                strings: ['Olá Galera, sou desenvolvedor java, gosto muito de estudar sobre um bom design de código e curto me aventurar no mundo javascript.'],
                autoStart: true,
                loop: true,
                delay: 10,
                pauseFor: 1000000
              }}
            />
          </CapaWrapper.Descricao>
        </CapaWrapper.Informacoes>
      </CapaWrapper.Box>
    </CapaWrapper>
  );
}