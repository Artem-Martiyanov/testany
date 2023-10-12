import React, {ChangeEvent, FC, useState} from 'react'
import {Button} from '@skbkontur/react-ui'
import {ImageSettings} from '../../../models/IUser'
import {ImageWrapper, YScale, XScale, ImageInner} from './styles'

interface ImageConfiguratorTypes {
  image: File | null,
  onSubmit: (settings: ImageSettings) => void
}

const ImageConfigurator: FC<ImageConfiguratorTypes> = ({image, onSubmit}) => {
  
  const [imgOffset, setImgOffset] = useState<{ x: number, y: number }>({x: 0, y: 0})
  
  const offsetHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.name === 'xOffset') {
      setImgOffset({...imgOffset, x: +evt.target.value})
    }
    if (evt.target.name === 'yOffset') {
      setImgOffset({...imgOffset, y: +evt.target.value})
    }
  }
  
  
  const [avatarScale, setAvatarScale] = useState<number>(1)
  const scaleHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value) {
      setAvatarScale(+evt?.target?.value)
    }
  }
  
  const submitHandler = () => {
    onSubmit({scale: avatarScale, offset: imgOffset})
  }
  
  return (
      <>
        <ImageWrapper>
          <ImageInner>
          <img style={{transform: `translate(${imgOffset.x}%, ${imgOffset.y}%) scale(${avatarScale})`}}
               src={image ? URL.createObjectURL(image) : ''}
               alt="Аватар"/>
          </ImageInner>
  
          <XScale>
            <input
                min={-50}
                max={50}
                value={imgOffset.x}
                step={0.05}
                name="xOffset"
                type="range"
                onChange={offsetHandler}
            />
          </XScale>
          <YScale>
            <input
                min={-50}
                max={50}
                value={imgOffset.y}
                step={0.05}
                name="yOffset"
                type="range"
                onChange={offsetHandler}
            />
          </YScale>
        </ImageWrapper>
        <div>
          Масштаб
          <input
              min={1}
              max={2}
              value={avatarScale}
              step={0.05}
              type="range"
              onChange={scaleHandler}
          />
        </div>
        <Button onClick={submitHandler}>Применить</Button>
      </>
  )
}

export default React.memo(ImageConfigurator)