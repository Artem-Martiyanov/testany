import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react'
import {Button} from '@skbkontur/react-ui'
import {ImageSettings} from '../../../models/IUser'
import {ImageWrapper, YScale, XScale, ImageInner} from './styles'

interface ImageConfiguratorTypes {
  image: File | null,
  onSubmit: (settings: ImageSettings) => void
}

const ImageConfigurator: FC<ImageConfiguratorTypes> = ({image, onSubmit}) => {
  
  const [imgOffset, setImgOffset] = useState<{ x: number, y: number }>({x: 0, y: 0})
  const imageRef = useRef<HTMLImageElement>(null)
  const [avatarScale, setAvatarScale] = useState<number>(1)
  
  const [imgOffsetPixels, setImgOffsetPixels] = useState<{ x: number, y: number }>({x: 0, y: 0})
  const [isAttached, setIsAttached] = useState<boolean>(false)
  const [attachPoint, setAttachPoint] = useState<{ x: number, y: number }>({x: 0, y: 0})
  
  
  
  const pointerMoveHandler = (evt: PointerEvent) => {
    if (!imageRef.current) {
      return
    }
    
    const imageElement = imageRef.current
    const imageWidth = imageElement.width
    const imageHeight = imageElement.height
    
    if (evt.clientX < imageElement.x || evt.clientX > imageElement.x + imageWidth || evt.clientY < imageElement.y || evt.clientY > imageElement.y + imageHeight) {
      setIsAttached(false)
    }
    
    const newX = imgOffsetPixels.x + evt.clientX - attachPoint.x
    const newY = imgOffsetPixels.y + evt.clientY - attachPoint.y
    
    const isOutOfLeft = newX <= (imageWidth * avatarScale - imageWidth) / 2
    const isOutOfRight = newX + imageWidth * avatarScale > imageWidth + (imageWidth * avatarScale - imageWidth) / 2
    const isOutOfTop = newY <= (imageHeight * avatarScale - imageHeight) / 2
    const isOutOfBottom = newY + imageHeight * avatarScale > imageHeight + (imageHeight * avatarScale - imageHeight) / 2
    
    setImgOffsetPixels((prevState) => ({
      x: !isOutOfRight || !isOutOfLeft ? prevState.x : newX,
      y: !isOutOfTop || !isOutOfBottom ? prevState.y : newY,
    }))
  }
  
  
  useEffect(() => {
    if (isAttached) {
      document.addEventListener('pointermove', pointerMoveHandler)
    } else {
      document.removeEventListener('pointermove', pointerMoveHandler)
    }
    return () => document.removeEventListener('pointermove', pointerMoveHandler)
  }, [isAttached])
  
  
  const pointerDownHandler = (evt: any) => {
    evt.preventDefault()
    setIsAttached(true)
    setAttachPoint({x: evt.clientX, y: evt.clientY})
  }
  
  const pointerUpHandler = () => {
    setIsAttached(false)
  }
  
  
  const scaleHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const currentAvatarScale = +evt?.target?.value
    
    if (currentAvatarScale) {
      setAvatarScale(currentAvatarScale)
    }
    
    if (!imageRef.current) {
      return
    }
  
    const imageElement = imageRef.current
  
    const imageWidth = imageElement.width
    const imageHeight = imageElement.height
    
    const newLeftAfterScale = ((imageWidth * currentAvatarScale) - imageWidth) / 2
    const isOutOfLeft = imageElement.x < imageElement.x - newLeftAfterScale + imgOffsetPixels.x
    const isOutOfRight = imageElement.x + imageWidth > imageElement.x - newLeftAfterScale + imgOffsetPixels.x + imageWidth * currentAvatarScale
    
    const newTopAfterScale = ((imageHeight * currentAvatarScale) - imageHeight) / 2
    const isOutOfTop = imageElement.y < imageElement.y - newTopAfterScale + imgOffsetPixels.y
    const isOutOfBottom = imageElement.y + imageHeight > imageElement.y - newTopAfterScale + imgOffsetPixels.y + imageHeight * currentAvatarScale
  
    
    if (isOutOfLeft) {
      setImgOffsetPixels((prevState) => ({
        x: (imageWidth * currentAvatarScale - imageWidth) / 2,
        y: prevState.y,
      }))
    }
  
    if (isOutOfRight) {
      setImgOffsetPixels((prevState) => ({
        x: -(imageWidth * currentAvatarScale - imageWidth) / 2,
        y: prevState.y,
      }))
    }
  
    if (isOutOfTop) {
      setImgOffsetPixels((prevState) => ({
        x: prevState.x,
        y: (imageHeight * currentAvatarScale - imageHeight) / 2,
      }))
    }
  
    if (isOutOfBottom) {
      setImgOffsetPixels((prevState) => ({
        x: prevState.x,
        y: -(imageHeight * currentAvatarScale - imageHeight) / 2,
      }))
    }
  }
  
  const submitHandler = () => {
    if (!imageRef.current) {
      return
    }
  
    const imageElement = imageRef.current
  
    const imageWidth = imageElement.width
    const imageHeight = imageElement.height
    
    const offset = {
      x: imgOffsetPixels.x / imageWidth * 100,
      y: imgOffsetPixels.y / imageHeight * 100
    }
    onSubmit({scale: avatarScale, offset: offset})
  }
  
  return (
      <>
        <ImageWrapper
            onPointerDown={pointerDownHandler}
            onPointerUp={pointerUpHandler}
        >
          <ImageInner>
            <img ref={imageRef}
                 style={{transform: `translate(${imgOffsetPixels.x}px, ${imgOffsetPixels.y}px) scale(${avatarScale})`}}
                 src={image ? URL.createObjectURL(image) : ''}
                 alt="Аватар"/>
          </ImageInner>
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