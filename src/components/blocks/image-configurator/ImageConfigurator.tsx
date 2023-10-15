import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react'
import {Button} from '@skbkontur/react-ui'
import {ImageSettings} from '../../../models/IUser'
import {ImageWrapper, YScale, XScale, ImageInner} from './styles'

interface ImageConfiguratorTypes {
  image: File | null,
  withMask?: boolean
  onSubmit: (settings: ImageSettings) => void
}

const ImageConfigurator: FC<ImageConfiguratorTypes> = ({image, onSubmit, withMask= false}) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const [avatarScale, setAvatarScale] = useState<number>(1.1)
  
  const [imgOffset, setImgOffset] = useState<{ x: number, y: number }>({x: 0, y: 0})
  const [isAttached, setIsAttached] = useState<boolean>(false)
  const [attachPoint, setAttachPoint] = useState<{ x: number, y: number }>({x: 0, y: 0})
  
  const getStartPointAfterScale = (scaleValue: number, width: number) => (width * scaleValue - width) / 2
  
  const pointerMoveHandler = (evt: PointerEvent) => {
    if (!imageRef.current) {
      return
    }
    
    const imgEl = imageRef.current
    if (
        evt.clientX < imgEl.x ||
        evt.clientY < imgEl.y ||
        evt.clientX > imgEl.x + imgEl.width ||
        evt.clientY > imgEl.y + imgEl.height
    ) {
      setIsAttached(false)
    }
    
    const newX = imgOffset.x + evt.clientX - attachPoint.x
    const newY = imgOffset.y + evt.clientY - attachPoint.y
    
    const leftAfterScale = getStartPointAfterScale(avatarScale, imgEl.width)
    const topAfterScale = getStartPointAfterScale(avatarScale, imgEl.height)
    
    const isOutOfLeft = newX <= leftAfterScale
    const isOutOfRight = newX + imgEl.width * avatarScale > imgEl.width + leftAfterScale
    const isOutOfTop = newY <= topAfterScale
    const isOutOfBottom = newY + imgEl.height * avatarScale > imgEl.height + topAfterScale
    
    setImgOffset((prevState) => ({
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
    const curScale = +evt?.target?.value
    
    if (curScale) {
      setAvatarScale(curScale)
    }
    
    if (!imageRef.current) {
      return
    }
    
    const imgEl = imageRef.current
    
    const leftAfterScale = getStartPointAfterScale(curScale, imgEl.width)
    const topAfterScale = getStartPointAfterScale(curScale, imgEl.height)
    
    const isOutOfTop = imgEl.y < imgEl.y - topAfterScale + imgOffset.y
    const isOutOfLeft = imgEl.x < imgEl.x - leftAfterScale + imgOffset.x
    const isOutOfBottom = imgEl.y + imgEl.height > imgEl.y - topAfterScale + imgOffset.y + imgEl.height * curScale
    const isOutOfRight = imgEl.x + imgEl.width > imgEl.x - leftAfterScale + imgOffset.x + imgEl.width * curScale
    
    
    setImgOffset((prevState) => ({
      x: isOutOfLeft ? leftAfterScale : isOutOfRight ? -leftAfterScale : prevState.x,
      y: isOutOfTop ? topAfterScale : isOutOfBottom ? -topAfterScale : prevState.y,
    }))
  }
  
  const submitHandler = () => {
    if (!imageRef.current) {
      return
    }
    
    onSubmit({
      scale: avatarScale,
      offset: {
        x: imgOffset.x / imageRef.current.width * 100,
        y: imgOffset.y / imageRef.current.height * 100,
      },
    })
  }
  
  return (
      <>
        <ImageWrapper
            onPointerDown={pointerDownHandler}
            onPointerUp={pointerUpHandler}
        >
          <ImageInner $mask={!isAttached} $widthMask={withMask}>
            <img ref={imageRef}
                 style={{transform: `translate(${imgOffset.x}px, ${imgOffset.y}px) scale(${avatarScale})`}}
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