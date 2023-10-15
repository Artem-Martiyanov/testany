import React, {FC, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import Container from '../../styled/container/Container'
import {changeUserAvatar, changeUserData} from '../../../store/action-creators/user-change'
import {ImageSettings} from '../../../models/IUser'
import {EditIcon} from '../../ui/icons'
import {UserAvatarWrapper, UserInfo, UserProfile} from './styles'
import ChangedString from '../../ui/changed-string/ChangedString'
import Image from '../../ui/image/Image'
import ChangedImage from '../../ui/changed-image/ChangedImage'
import {Button} from '@skbkontur/react-ui'
import Modal from '../../ui/modal/Modal'
import Title from '../../ui/title/Title'
import {Size} from '../../ui/title/styles'
import ChangePasswordForm from '../../blocks/change-password-form/ChangePasswordForm'
import {useAuthRedirect} from '../../../hooks/use-redirect/use-auth-redirect'


const PersonalPage: FC = () => {
  const userState = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  useAuthRedirect()
  
  const [isModalVisible, setIsModalVisible] = useState(false)
  
  const userDataChangeHandler = (newValue: string) => {
    dispatch(changeUserData({name: newValue}))
  }
  
  const changeAvatarHandler = (newAvatar: File | null, settings: ImageSettings) => {
    dispatch(changeUserAvatar(newAvatar, settings))
  }
  
  return (
      <>
        <Container>
          <UserProfile>
            <UserAvatarWrapper $isAvatarLoaded={!!userState.user.avatar?.image}>
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
              <ChangedString
                  value={userState.user.name}
                  onSubmit={userDataChangeHandler}
                  icon={<EditIcon/>}
                  font={{size: '24px', weight: '700'}}
                  as={'h2'}
              />
              <p>Email: <b>{userState.user.email}</b></p>
              <p>Права: <b>{userState.user.role}</b></p>
              
              <Button type="button" onClick={() => setIsModalVisible(true)}>Сменить пароль</Button>
            </UserInfo>
          </UserProfile>
        </Container>
        
        {isModalVisible &&
            <Modal title={<Title size={Size.SMALL} level={'h3'}>{'Смена пароля'}</Title>}
                   onClose={() => setIsModalVisible(false)}>
              <ChangePasswordForm/>
            </Modal>}
      </>
  )
}

export default React.memo(PersonalPage)