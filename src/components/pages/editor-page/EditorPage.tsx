import React, {FC} from 'react'
import {EditorLeftSide, EditorWrapper, PreviewImageBlock, PreviewImageWrapper} from './styles'
import Image from '../../ui/image/Image'
import Container from '../../styled/container/Container'
import {useAppSelector} from '../../../store/hooks'
import ChangedImage from '../../ui/changed-image/ChangedImage'
import ChangedString from '../../ui/changed-string/ChangedString'
import {EditIcon} from '../../ui/icons'
import {ImageSettings} from '../../../models/IUser'

interface EditorPageTypes {
  
}

const EditorPage: FC<EditorPageTypes> = () => {
  const userState = useAppSelector(state => state.user)
  
  
  const titleChangeSubmitHandler = (newValue: string) => {
  }
  
  const previewChangeSubmitHandler = (newAvatar: File | null, settings: ImageSettings) => {
  
  }
  
  
  return (
      <Container>
        <EditorWrapper>
          <EditorLeftSide>
            
            <PreviewImageBlock>
              <ChangedString
                  value={'Название теста'}
                  onSubmit={titleChangeSubmitHandler}
                  as={'h2'}
                  icon={<EditIcon/>}
              />
              
              <PreviewImageWrapper>
                <ChangedImage onSubmit={previewChangeSubmitHandler}
                              imageIsUploaded={!!userState.user.avatar?.image}
                >
                  
                  {userState.user.avatar?.image &&
                      <Image
                          src={userState.user.avatar.image}
                          offset={userState.user.avatar.settings.offset}
                          scale={userState.user.avatar.settings.scale}
                          alt="Аватар."
                      />
                  }
                </ChangedImage>
              </PreviewImageWrapper>
            </PreviewImageBlock>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi, architecto at, beatae
              blanditiis error est ex in inventore iure mollitia odio optio sapiente sit ullam unde ut veritatis.
              Odio.
            </p>
          
          
          </EditorLeftSide>
        </EditorWrapper>
      </Container>
  )
}

export default React.memo(EditorPage)


/*
* Что должно быть?
*
* 2. Название теста, описание
* 3. При переходе в редактор сразу предлагается заполнить название теста,
*     выбрать картинку, выбрать тип (позже)
* 4. Далее конструктор: 1 страница - поле ввода вопроса, варианты ответа (выбрать тип: множественный ответ или одиночный)
* 5. Поля ввода добавляются по клику на кнопку, также удаляются
* 6. Минимум 2 поля
* 7. Виды полей ввода: радио, чекбоксы, инпут текст.
* 8. Кнопка (правильный ответ)
* 9. При заполнении всех обязательный полей предлагается сконфигурировать следующую страницу
* */