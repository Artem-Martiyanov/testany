import * as React from 'react';
import {Title as StyledTitle} from "./styles";


type Props = {
  children: string,
  size?: string,
  level?: string,
  bottomIndent?: string
}

export const TitleSize = {
  SMALL: '20px',
  REGULAR: '32px',
  BIG: '44px'
}

const Title = ({children, size = TitleSize.REGULAR, level = 'h1', bottomIndent}: Props) => {
  return (
    <StyledTitle as={level} $bottomIndent={bottomIndent} $size={size}>
      {children}
    </StyledTitle>
  );
};

export default Title;
