import React, {ChangeEvent, FC, useRef, useState} from 'react'
import {BottomPanel, FileInput, FileInputLabel, HoverBackground, ImageWrapper, RemoveButton, TopPanel} from './styles'
import {CrossIcon, UploadIcon} from '../icons'
import Modal from '../modal/Modal'
import ImageConfigurator from '../../blocks/image-configurator/ImageConfigurator'
import {defaultImageSettings, ImageSettings} from '../../../models/IUser'

interface ChangedImageTypes {
  children: any
  imageIsUploaded: boolean
  onSubmit: (newFile: File | null, imageSettings: ImageSettings) => void
}

const ChangedImage: FC<ChangedImageTypes> = ({children, onSubmit, imageIsUploaded}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const inputFile = useRef<HTMLInputElement>(null)
  
  const submitAvatarHandler = (settings: ImageSettings) => {
    if (avatarFile) {
      onSubmit(avatarFile, settings)
    }
  }
  
  const closeModalHandler = () => {
    if (inputFile.current) {
      inputFile.current.value = ''
    }
    setIsModalVisible(false)
  }
  
  const removeButtonHandler = () => {
    onSubmit(null, defaultImageSettings)
  }
  
  const changeAvatarHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files
    
    if (files && files.length) {
      const userAvatar: File = files[0]
      setIsModalVisible(true)
      setAvatarFile(userAvatar)
    }
  }
  
  return (
      <>
      <ImageWrapper>
        {children}
        <HoverBackground>
          <TopPanel>
            {imageIsUploaded &&
            <RemoveButton type="button" title="Удалить изображение" onClick={removeButtonHandler}>
              <CrossIcon/>
            </RemoveButton>
            }
          </TopPanel>
          <BottomPanel>
            <FileInputLabel>
              Загрузить изображение
              <UploadIcon/>
              <FileInput
                  ref={inputFile}
                  type="file"
                  accept="image/*"
                  onChange={changeAvatarHandler}
              />
            </FileInputLabel>
          </BottomPanel>
        </HoverBackground>
      </ImageWrapper>
        {isModalVisible &&
            <Modal onClose={closeModalHandler}>
              <ImageConfigurator image={avatarFile} onSubmit={submitAvatarHandler}/>
            </Modal>}
        </>
  )
}

export default React.memo(ChangedImage)