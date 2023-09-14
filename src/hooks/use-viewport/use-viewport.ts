import {useEffect, useState} from "react";


type ViewportType = {
  MOBILE: boolean,
  TABLET: boolean,
  DESKTOP: boolean
}

export const useViewport = (): ViewportType => {
  const initState = {MOBILE: false, TABLET: false, DESKTOP: false}
  let newState = initState

  const [viewport, setViewport] = useState<ViewportType>(initState);
  const resizeHandler = () => {
    if (!newState.MOBILE && window.innerWidth < 768) {
      newState = {...initState, MOBILE: true}
      setViewport(newState)
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1080 && !newState.TABLET) {
      newState = {...initState, TABLET: true}
      setViewport(newState)
    }
    if (window.innerWidth >= 1080 && !newState.DESKTOP) {
      newState = {...initState, DESKTOP: true}
      setViewport(newState)
    }
  }
  useEffect(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    };
  }, []);

  return viewport
}
