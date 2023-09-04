import * as React from 'react';
import {Content, Wrapper, Header, Close} from "./styles";
import Title, {TitleSize} from "../../ui/title/Title";


type Props = {
  children: string,
  title: string,
  visible: boolean,
  changeVisible: (visible?: boolean) => void
}

const Modal = ({children, title, visible, changeVisible}: Props) => {
  const changeHandler = () => changeVisible(visible)

  return (
    visible &&
      <Wrapper onClick={changeHandler}>
        <Content onClick={(evt) => evt.stopPropagation()}>
          <Header>
            <Title level={'h3'} size={TitleSize.SMALL}>{title}</Title>
            <Close onClick={changeHandler}/>
          </Header>
          {children}
        </Content>
      </Wrapper>
  );
};

export default Modal;
