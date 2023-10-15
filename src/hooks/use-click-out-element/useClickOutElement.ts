import {Ref, useEffect, useRef} from 'react'

type useClickOutElementType = (cb: () => void) => Ref<any>
export const useClickOutElement: useClickOutElementType = (cb) => {
  const elRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const clickHandler = (evt: MouseEvent) => {
      if (elRef && elRef.current && !elRef.current.contains(evt.target as Node)) {
        cb()
      }
    }
    document.addEventListener('pointerdown', clickHandler)
    return () => document.removeEventListener('pointerdown', clickHandler)
  }, [])
  
  return elRef
}
