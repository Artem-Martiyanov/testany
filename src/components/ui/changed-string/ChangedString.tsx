import React, {FC, ReactElement, useState} from 'react'
import {EditButton, Text, Wrapper} from './styles'
import TextChanger from '../text-changer/TextChanger'

interface ChangedStringTypes {
  value: string,
  onSubmit: (newValue: string) => void,
  icon?: ReactElement,
  font?: {
    size?: string,
    weight?: string,
  }
  as?: string
}

const ChangedString: FC<ChangedStringTypes> = ({value, onSubmit, icon, font, as}) => {
  const Icon: FC = () => icon || null
  
  
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const submitChangeHandler = (newText: string) => {
    if (newText !== value) {
      onSubmit(newText)
    }
    setIsEditing(false)
  }
  const cancelChangeHandler = () => {
      setIsEditing(false)
  }
  
  
  const editButtonClickHandler = () => {
    setIsEditing(true)
  }
  
  
  return (
      <Wrapper>
        {isEditing ?
            <TextChanger
                text={value}
                onSubmit={submitChangeHandler}
                onCancel={cancelChangeHandler}
            />
            :
            <>
              <Text as={as} $font={font}>{value}</Text>
              <EditButton type="button" onClick={editButtonClickHandler}>
                {icon ? <Icon/> : 'Ред.'}
              </EditButton>
            </>
        }
      </Wrapper>
  )
}

export default React.memo(ChangedString)