import * as React from "react";
import Title, {TitleSize} from "../title/Title";
import {IProduct} from "../../../models/models";
import {Card, ContentWrapper, Price, ProductFooter, ProductImage, ProductRating} from "./styles";
import {Content} from "./styles";

type Props = {
  titleLevel: string,
  cardData: IProduct,
  $isList: boolean
}

const Product = ({titleLevel, cardData, $isList}: Props) => {
  return (
    <Card $isList={$isList}>
      <ProductImage $isList={$isList}>
        <img src={cardData.image} alt={cardData.title}/>
      </ProductImage>
      <ContentWrapper>
        <Title
          level={titleLevel}
          size={TitleSize.SMALL}
          bottomIndent='20px'
        >
          {cardData.title}
        </Title>
        <Content>{cardData.description}</Content>
        <ProductFooter>
          <Price>Цена: {cardData.price} $.</Price>
          <ProductRating>Рейтинг: {cardData?.rating?.rate}</ProductRating>
        </ProductFooter>
      </ContentWrapper>
    </Card>
  );
};

export default Product;
