import React, {FC} from 'react'
import {Modal as ModalUI} from '@skbkontur/react-ui'
import {ReactElement} from 'react'

interface ModalProps {
  onClose: () => void,
  title?: string | ReactElement,
  children?: string | ReactElement
}

const Modal: FC<ModalProps> = ({onClose, title, children}) => {
  return (
      <ModalUI onClose={onClose}>
        <ModalUI.Header>{title}</ModalUI.Header>
        <ModalUI.Body>
          {children}
        </ModalUI.Body>
      </ModalUI>)
}
export default React.memo(Modal)