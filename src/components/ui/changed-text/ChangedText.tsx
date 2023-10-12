import React, {FC, ReactElement, useState} from 'react'
import {EditButton, Label, Text, Wrapper} from './styles'
import {Button, Input} from '@skbkontur/react-ui'
import {CheckIcon, CrossIcon} from '../icons'

interface ChangedTextTypes {
  value: string,
  onSubmit: (newValue: string) => void,
  icon?: ReactElement,
  font?: {
    size?: string,
    weight?: string,
  }
}

const ChangedText: FC<ChangedTextTypes> = ({value, onSubmit, icon, font}) => {
  const Icon: FC = () => icon || null
  
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>(value)
  
  const submitChangeHandler = () => {
    onSubmit(inputText)
    setIsEditing(false)
  }
  const cancelChangeHandler = () => {
    setIsEditing(false)
    setInputText(value)
  }
  
  
  return (
      <Wrapper>
        {isEditing ?
            <Label>
              <Input
                  type="text"
                  value={inputText}
                  onChange={(evt) => setInputText(evt.target.value)}
              />
              <Button type="button" use='success' onClick={submitChangeHandler}><CheckIcon/></Button>
              <Button type="button" use='danger' onClick={cancelChangeHandler}><CrossIcon/></Button>
            </Label>
            
            :
            <>
              <Text $font={font}>{value}</Text>
              <EditButton type="button" onClick={() => setIsEditing(true)}>
                {icon ? <Icon/> : 'Ред.'}
              </EditButton>
            </>
        }
      </Wrapper>
  )
}

export default React.memo(ChangedText)