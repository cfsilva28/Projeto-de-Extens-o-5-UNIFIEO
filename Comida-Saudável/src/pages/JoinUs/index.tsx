import {
  AsideStyled,
  ContainerStyled,
  ContentStyled,
  EmailStyled,
  FooterStyled,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const JoinUs  = () => {
  return (
    <ContainerStyled id="Join">
      <ContentStyled>
        <EmailStyled>
          <h2>Junte-se à nossa associação para receber ofertas especiais</h2>
          <div>
            <Input
              type="text"
              name=""
              mask=""
              placeholder="Digite seu endereço de e-mail"
            />
            <Button>Junte-se</Button>
          </div>
        </EmailStyled>
        <AsideStyled>

        </AsideStyled>
      </ContentStyled>
      <FooterStyled>
        <p>© Direitos Autorais 2019 Stack. Todos os direitos reservados.</p>
        <nav>
          <ul>
            <li>Política de Privacidade</li>
            <li>Termos e Condições</li>
          </ul>
        </nav>
      </FooterStyled>
    </ContainerStyled>
  );
};
