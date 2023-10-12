import React, {FC, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {AppRoute} from '../../../routes'
import Container from '../../styled/container/Container'
import {changeUserAvatar, changeUserData} from '../../../store/action-creators/user-change'
import {ImageSettings} from '../../../models/IUser'
import {EditIcon} from '../../ui/icons'
import {UserAvatarWrapper, UserInfo, UserProfile} from './styles'
import ChangedText from '../../ui/changed-text/ChangedText'
import Image from '../../ui/image/Image'
import ChangedImage from '../../ui/changed-image/ChangedImage'


const PersonalPage: FC = () => {
  const authState = useAppSelector(state => state.auth)
  const userState = useAppSelector(state => state.user)
  const setLocation = useNavigate()
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (!authState.isAuth) {
      setLocation(AppRoute.MAIN)
    }
  }, [authState.isAuth, setLocation])
  
  
  const userDataChangeHandler = (newValue: string) => {
    dispatch(changeUserData({name: newValue}))
  }
  
  const changeAvatarHandler = (newAvatar: File | null, settings: ImageSettings) => {
    dispatch(changeUserAvatar(newAvatar, settings))
    dispatch(changeUserData({avatar: {image: '', settings: settings}}))
  }
  
  return (
      <Container>
        <UserProfile>
          <UserAvatarWrapper>
            <ChangedImage onSubmit={changeAvatarHandler} imageIsUploaded={!!userState.user.avatar?.image}>
              {userState.user.avatar?.image &&
                  <Image
                      src={userState.user.avatar.image}
                      offset={userState.user.avatar.settings.offset}
                      scale={userState.user.avatar.settings.scale}
                      alt="Аватар."
                  />
              }
            </ChangedImage>
          </UserAvatarWrapper>
          <UserInfo>
            <ChangedText
                value={userState.user.name}
                onSubmit={userDataChangeHandler}
                icon={<EditIcon/>}
                font={{size: '24px', weight: '700'}}
            />
          </UserInfo>
        </UserProfile>
        <p>Email: <b>{userState.user.email}</b></p>
        <p>Права: <b>{userState.user.role}</b></p>
      </Container>
  )
}

export default React.memo(PersonalPage)