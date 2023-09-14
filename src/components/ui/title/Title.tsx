import * as React from 'react';
import {Title as StyledTitle} from "./styles";
import {Size} from "./styles";


interface TitleProps {
  size?: Size,
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  indentBottom?: number
}

const Title: React.FC<TitleProps> = ({size= Size.MEDIUM, level= 'h1', indentBottom, children}) => {
  return (
    <StyledTitle as={level} size={size} $indent={indentBottom}>
      {children}
    </StyledTitle>
  );
};

export default Title;
