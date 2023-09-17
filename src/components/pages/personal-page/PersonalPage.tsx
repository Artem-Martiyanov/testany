import React, {FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAppSelector} from '../../../store/hooks'
import {AppRoute} from '../../../routes'


const PersonalPage: FC = () => {
  const [show, setShow] = useState(false)
  const authState = useAppSelector(state => state.auth)
  const setLocation = useNavigate()
  useEffect(() => {
    if (!authState.isAuth) {
      setLocation(AppRoute.MAIN)
    }
  }, [])
  
  
  return (
      <div>
        
        <button onClick={() => setShow(true)}>Кнопка Админа</button>
        
        {show ? <div>
          Привет, Админ!
        </div> : ''}
      
      </div>
  )
}

export default React.memo(PersonalPage)