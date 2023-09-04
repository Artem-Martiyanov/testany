import * as React from 'react';
import {Container, HeaderElement} from "./styles";
import Nav from "../nav/Nav";
import UserNav from "../user-nav/UserNav";
import Modal from "../modal/Modal";
import {useState} from "react";
import LoginForm from "../../blocks/login-form/login-form";

const Header = () => {
  const [modalView, setModalView] = useState(true)
  const toggleModal = () => setModalView(!modalView)


  const autorized = false


  const submitHandler = (data) => {
    console.log(data)
  }


  return (
    <>
    <HeaderElement>
      <Container>
        <Nav/>
        <UserNav
          isAuthorized={true}
          username={'Артём Мартиянов'}
          onClick={toggleModal}
        />
      </Container>
    </HeaderElement>
      <Modal visible={modalView} changeVisible={toggleModal} title='Заголовок'>
        <LoginForm onSubmit={submitHandler} isRegister={true}/>
      </Modal>
    </>
  );
};

export default Header;
