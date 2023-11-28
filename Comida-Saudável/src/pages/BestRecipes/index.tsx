import { ContainerStyled, CardStyled, HeaderStyled } from "./styles";
import { Card } from "../../components/Card";
import imagemBroccoli from "../../assets/comida_1.svg";
import imagemBurger from "../../assets/comida_2.svg";
import imagemSalad from "../../assets/comida_3.svg";
import imagemCobbler from "../../assets/comida_4.svg";

export const BestRecipes = () => {
  return (
    <ContainerStyled id="BestRecipes">
      <HeaderStyled>
        <h2>Nossas Melhores Receitas</h2>
        <p>
          Bem longe, atrás das montanhas de palavras, longe dos países
          Vakalia e Consonantia, vivem os textos cegos.
        </p>
      </HeaderStyled>

      <CardStyled>
        <div>
          <Card img={imagemBroccoli} h2={"Salada de Brócolis com Bacon"} />
          <Card img={imagemSalad} h2={"Salada Clássica de Batata"} />
        </div>
        <div>
          <Card img={imagemBurger} h2={"Hambúrguer Clássico de Carne"} />
          <Card img={imagemCobbler} h2={"Cobbler de Cereja na Grelha"} />
        </div>
      </CardStyled>
    </ContainerStyled>
  );
};
