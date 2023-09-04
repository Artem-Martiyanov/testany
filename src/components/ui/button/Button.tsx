import * as React from 'react';

import {Button as StyledButton} from "./styles";


type Props = {
  children?: string,
  onClick: () => void,
  props?: any
}

const Button = ({onClick, children, ...props}: Props) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
