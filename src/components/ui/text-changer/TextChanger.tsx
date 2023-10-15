import React, {FC, FormEvent, useState} from 'react'
import {Button, Input} from '@skbkontur/react-ui'
import {Buttons, ChangerForm, Label} from './styles'
import {CheckIcon, CrossIcon} from '../icons'
import {useClickOutElement} from '../../../hooks/use-click-out-element/useClickOutElement'

interface TextChangerTypes {
  text: string,
  onSubmit: (newText: string) => void,
  onCancel: () => void
}

const TextChanger: FC<TextChangerTypes> = ({text, onSubmit, onCancel}) => {
  const [inputText, setInputText] = useState<string>(text)
  
  const cancelChangeHandler = () => {
    setInputText(text)
    onCancel()
  }
  const formRef = useClickOutElement(cancelChangeHandler)
  
  const submitChangeHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onSubmit(inputText)
  }
  
  return (
      <ChangerForm onSubmit={submitChangeHandler} ref={formRef}>
        <Label>
          <Input
              type="text"
              value={inputText}
              onChange={(evt) => setInputText(evt.target.value)}
          />
          <Buttons>
            <Button type="submit" use="success"><CheckIcon/></Button>
            <Button type="reset" use="danger" onClick={cancelChangeHandler}><CrossIcon/></Button>
          </Buttons>
        </Label>
      </ChangerForm>
  )
}

export default React.memo(TextChanger)