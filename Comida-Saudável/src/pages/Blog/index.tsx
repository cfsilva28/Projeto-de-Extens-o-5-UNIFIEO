import { Container, CarouselStyled, HeaderStyled } from "./styles";
import { Carousel } from "./components/Carousel";
export const Blog = () => {
  return (
    <Container id="Blog">
      <HeaderStyled>
        <h2>Leia Nosso Blog</h2>
        <p>
          Bem longe, atrás das montanhas de palavras, longe dos países
          Vokalia e Consonantia, vivem os textos invisíveis.
        </p>
      </HeaderStyled>
      <CarouselStyled>
        <Carousel />
      </CarouselStyled>
    </Container> 
  );
};
