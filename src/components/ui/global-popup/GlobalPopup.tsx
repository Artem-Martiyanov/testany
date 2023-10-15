import React, {FC, useEffect} from 'react'
import {Modal} from '@skbkontur/react-ui'
import {setPopupVisibility} from '../../../store/reducers/popup-slice'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {Content} from './styles'


const GlobalPopup: FC = () => {
  const dispatch = useAppDispatch()
  const popupState = useAppSelector(state => state.popup)
  
  useEffect(() => {
    if (popupState.visibility) {
      setTimeout(() => dispatch(setPopupVisibility(false)), 3000)
    }
  }, [popupState.visibility])
  
  return (
      <>
        {popupState.visibility &&
            <Modal onClose={() => dispatch(setPopupVisibility(false))} >
              <Content $type={popupState.type}>
                {popupState.message}
              </Content>
            </Modal>
        }
      </>
  )
}

export default React.memo(GlobalPopup)