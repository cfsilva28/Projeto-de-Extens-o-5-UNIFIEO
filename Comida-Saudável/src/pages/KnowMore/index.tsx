import { ContainerStyled, AsideStyled, ContentStyled } from "./styles";
import { Button } from "../../components/Button";
import imageServices from "../../assets/bloco_services.svg";

export const KnowMore = () => {
  return (
    <ContainerStyled>
      <AsideStyled>
        <img src={imageServices} alt="Mulher Cozinhando" />
      </AsideStyled>
      <ContentStyled>
        <div>
          <h2>Os melhores serviços prontos para atendê-lo</h2>
          <p>
            Bem longe, atrás das montanhas de palavras, longe dos países Vokalia
            e Consonantia, vivem os textos invisíveis.
          </p>
          <p>
            Separados, eles vivem em Bookmarksgrove, bem na costa da Semântica,
            um grande oceano de linguagem.
          </p>
          <p>
            Um pequeno rio chamado Duden flui por seu lugar e o abastece com os
            necessários regelialia.
          </p>
          <Button>Saiba Mais</Button>
        </div>
      </ContentStyled>
    </ContainerStyled>
  );
};
