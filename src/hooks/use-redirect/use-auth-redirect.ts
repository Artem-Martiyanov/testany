import {useEffect} from 'react'
import {AppRoute} from '../../routes'
import {useAppSelector} from '../../store/hooks'
import {useNavigate} from 'react-router-dom'


export const useAuthRedirect = () => {
  const authState = useAppSelector(state => state.auth)
  const appState = useAppSelector(state => state.app)
  const setLocation = useNavigate()
  
  useEffect(() => {
    if (!authState.isAuth && !appState.fetching) {
      setLocation(AppRoute.MAIN)
    }
  }, [authState.isAuth, appState.fetching])
}