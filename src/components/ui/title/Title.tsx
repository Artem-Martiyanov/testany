import * as React from 'react';
import {Title as StyledTitle} from "./styles";
import {TitleSizeType} from "./styles";


interface TitleProps {
  size: TitleSizeType,
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title: React.FC<TitleProps> = ({size, level, children}) => {
  return (
    <StyledTitle as={level} size={size}>
      {children}
    </StyledTitle>
  );
};

export default Title;
