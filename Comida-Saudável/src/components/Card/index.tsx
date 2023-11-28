import { ContainerStyled, ContentStyled } from "./styles";

import { Button } from "../Button";

export const Card = ({ img, h2 }: any) => {
  return (
    <ContainerStyled>
      <img src={img} alt="" />
      <ContentStyled>
        <h2>{h2}</h2>
        <Button>Ver Receita</Button>
      </ContentStyled>
    </ContainerStyled>
  );
};
