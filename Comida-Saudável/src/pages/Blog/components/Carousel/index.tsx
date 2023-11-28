import { Container, Card, UserInfo } from "./styles";

import quickStart from "../../../../assets/blog_image_1.svg";
import tips from "../../../../assets/bloco_image_2.svg";
import benefits from "../../../../assets/bloco_image_3.svg";
import plate from "../../../../assets/bloco_image_4.svg";
import author1 from "../../../../assets/author1.svg";
import author2 from "../../../../assets/author2.svg";
import author3 from "../../../../assets/author3.svg";
import author4 from "../../../../assets/author4.svg";

import "./script";

export const Carousel = () => {
  return (
    <Container className="carousel owl-carousel">
      <Card>
        <img src={quickStart} alt="Seeds and Nuts" />
        <h2>Guia Rápido para Nozes e Sementes</h2>
        <UserInfo>
          <img src={author1} alt="Profile Kevin" />
          <p>Kevin Ibrahum</p>
        </UserInfo>
      </Card>

      <Card>
        <img src={tips} alt="Healthy Food" />
        <h2>Nutrição: Dicas para Melhorar Sua Saúde</h2>
        <UserInfo>
          <img src={author2} alt="Profile Mike" />
          <p>Mike Jackson</p>
        </UserInfo>
      </Card>

      <Card>
        <img src={benefits} alt="Heart shaped mug with berries" />
        <h2>Os 10 Principais Benefícios de uma Alimentação Saudável</h2>
        <UserInfo>
          <img src={author3} alt="Profile Bryan" />
          <p>Bryan McGregor</p>
        </UserInfo>
      </Card>

      <Card>
        <img src={plate} alt="Empty plate with sad face" />
        <h2>Lorem Ipsum Dolor Sit Amet Consectetur</h2>
        <UserInfo>
          <img src={author4} alt="Profile Jash" />
          <p>Jash Berson</p>
        </UserInfo>
      </Card>
    </Container>
  );
};
