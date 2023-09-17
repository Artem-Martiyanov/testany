import React, {FC} from 'react';
import {Container} from "../../styled";
import LoaderOverlay from '../../ui/loader-overlay/LoaderOverlay'




const MainPage: FC = () => {
  
  return (
      <Container>
        Главная
      </Container>
  );
};

export default React.memo(MainPage);