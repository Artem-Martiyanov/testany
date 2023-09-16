import React, {FC} from 'react'
import {ValidatorMessage, ValidatorMessageWrapper, ValidatorWrapper} from "./styles";
import {ReactElement} from "react";

interface ValidatorProps {
  message: string,
  children: ReactElement
}

const Validator: FC<ValidatorProps> = ({children, message}) => {
  return (
      <ValidatorWrapper>
        {children}
        <ValidatorMessageWrapper $isActive={message.length > 0}>
          <ValidatorMessage>{message}</ValidatorMessage>
        </ValidatorMessageWrapper>
      </ValidatorWrapper>
  )
}


export default React.memo(Validator)