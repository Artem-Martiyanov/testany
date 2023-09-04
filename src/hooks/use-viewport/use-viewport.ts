import {useEffect, useState} from "react";

export const useViewport = () => {
  const initState = {MOBILE: false, TABLET: false, DESKTOP: false}
  let newState = initState

  const [viewport, setViewport] = useState(initState);
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
