import * as React from 'react';
import Product from "../../ui/product/Product";
import {Container, ProductList, Tools} from "./styles";
import Title, {TitleSize} from "../../ui/title/Title";
import Button from "../../ui/button/Button";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {fetchProducts} from "../../../store/action-creators/fetch-product";
import {useViewport} from "../../../hooks/use-viewport/use-viewport";
import Dropdown from "../../ui/dropdown/Dropdown";
import {productsSortByName, productsSortByPrice, productsSortByRating} from "../../../store/reducers/products-slice";


const CatalogPage = () => {
  const dispatch = useAppDispatch()
  const {products} = useAppSelector(state => state.products)
  const viewport = useViewport()

  enum FilterType {
    NAME = 'name',
    PRICE = 'price',
    RATING = 'rating'
  }


  const dropdownOptions = [
    {
      title: 'По названию',
      value: FilterType.NAME,
    },
    {
      title: 'По цене',
      value: FilterType.PRICE,
    },
    {
      title: 'По рейтингу',
      value: FilterType.RATING
    }
  ]

  const typeFilterHandler = (selectedOption) => {
    if (selectedOption.value === FilterType.NAME) {
      dispatch(productsSortByName())
    }
    if (selectedOption.value === FilterType.RATING) {
      dispatch(productsSortByRating())
    }
    if (selectedOption.value === FilterType.PRICE) {
      dispatch(productsSortByPrice())
    }
  }


  useEffect(() => {
    dispatch(fetchProducts())
  }, [])


  useEffect(() => {
    !viewport.DESKTOP ? setIsViewList(true) : setIsViewList((prev) => prev)
  }, [viewport]);


  const [isViewList, setIsViewList] = useState(true)

  return (
    <Container>
      <Title size={TitleSize.BIG} level={'h1'} bottomIndent='20px'>Каталог продуктов</Title>
      <Tools>
        <Dropdown
          title='Сортировать:'
          elements={dropdownOptions}
          onSelect={typeFilterHandler}
        ></Dropdown>
        {viewport.DESKTOP && (<Button onClick={() => setIsViewList(!isViewList)}>
          {isViewList ? 'Сетка' : 'Список'}
        </Button>)}
      </Tools>
      <ProductList $isList={isViewList}>
        {products.map(product => {
          return <Product
            titleLevel='h2'
            key={product.id}
            cardData={product}
            $isList={isViewList}
          />
        })}
      </ProductList>
    </Container>
  );
};

export default React.memo(CatalogPage);
