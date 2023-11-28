import {
  ContainerStyled,
  HeaderStyled,
  SearchRecipesStyled,
} from "./styles";

import { ModalCreateUser } from "./components/Modal";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { IoSearchOutline } from "react-icons/io5";

export const Home = () => {
  return (
    <ContainerStyled>
      <HeaderStyled>
        <h1>Comida Saudável</h1>
        <nav>
          <ul>
            <li><a href="#BestRecipes">RECEITAS SAUDÁVEIS</a></li>
            <li><a href="#Blog">BLOG</a></li>
            <li><a href="#Join">JUNTE-SE</a></li>
          </ul>
          <ModalCreateUser />
        </nav>
      </HeaderStyled>
      <SearchRecipesStyled className="teste">
        <h2>Pronto para experimentar uma nova receita?</h2>
        <div>
          <Input
            type="text"
            name=""
            mask=""
            placeholder="Busque receitas saudáveis"
          />
          <Button>
            <IoSearchOutline />
          </Button>
        </div>
      </SearchRecipesStyled>
    </ContainerStyled>
  );
};
