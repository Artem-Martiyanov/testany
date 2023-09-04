import * as React from 'react';
import StyledInput from "../../styled/input/Input";


type Props = {
  value?: any,
  onInput: (value: any) => void,
}


const TextInput: React.FC<React.InputHTMLAttributes<any> & Props> = ({value = '', onInput, ...props}) => {

  return (
    <StyledInput
      value={value}
      onInput={(evt) => onInput(evt.target.value)}
      {...props}
    />
  );
};

export default TextInput;
