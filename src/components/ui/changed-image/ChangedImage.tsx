import React, {ChangeEvent, FC, useRef, useState} from 'react'
import {BottomPanel, FileInput, FileInputLabel, HoverBackground, ImageWrapper, RemoveButton, TopPanel} from './styles'
import {CrossIcon, UploadIcon} from '../icons'
import Modal from '../modal/Modal'
import ImageConfigurator from '../../blocks/image-configurator/ImageConfigurator'
import {defaultImageSettings, ImageSettings} from '../../../models/IUser'
import {useAppDispatch} from '../../../store/hooks'
import {setPopupMessage} from '../../../store/reducers/popup-slice'


const Settings: { UPLOAD_FILE_TYPES: string, MAX_UPLOAD_FILE_SIZE: number } = {
  UPLOAD_FILE_TYPES: 'image/*',
  MAX_UPLOAD_FILE_SIZE: 0.5,
}

interface ChangedImageTypes {
  children: any
  imageIsUploaded: boolean
  onSubmit: (newFile: File | null, imageSettings: ImageSettings) => void
}

const ChangedImage: FC<ChangedImageTypes> = ({children, onSubmit, imageIsUploaded}) => {
  const dispatch = useAppDispatch()
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const inputFile = useRef<HTMLInputElement>(null)
  
  const submitImageHandler = (settings: ImageSettings) => {
    if (imageFile) {
      onSubmit(imageFile, settings)
      setIsModalVisible(false)
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
  
  const changeImageHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files
    
    if (files && files.length) {
      const userAvatar: File = files[0]
      
      if (userAvatar.size / 1024 / 1024 > Settings.MAX_UPLOAD_FILE_SIZE) {
        dispatch(setPopupMessage({
          message: `Размер файла не должен превышать ${Settings.MAX_UPLOAD_FILE_SIZE}Мб`,
          type: 'error',
        }))
        evt.target.value = ''
        return
      }
      
      setIsModalVisible(true)
      setImageFile(userAvatar)
      evt.target.value = ''
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
                    accept={Settings.UPLOAD_FILE_TYPES}
                    onChange={changeImageHandler}
                />
              </FileInputLabel>
            </BottomPanel>
          </HoverBackground>
        </ImageWrapper>
        {isModalVisible &&
            <Modal onClose={closeModalHandler}>
              <ImageConfigurator image={imageFile} onSubmit={submitImageHandler} withMask/>
            </Modal>}
      </>
  )
}

export default React.memo(ChangedImage)