import * as React from 'react';
import {Container, Text} from "./styles";
import Title, {TitleSize} from "../../ui/title/Title";

const MainPage = () => {

  return (
    <Container>
      <Title size={TitleSize.BIG} bottomIndent='20px'>Это главная страница</Title>
      <Text>
        Здесь есть какой-то текст: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis error
        fuga iusto nesciunt officiis quisquam soluta veritatis? Aut autem consequatur corporis dignissimos
        distinctio
        doloribus est id ipsam minus necessitatibus nobis odio, quam quisquam quod recusandae sapiente, sed suscipit
        totam.
      </Text>
    </Container>
  );
};

export default MainPage;
