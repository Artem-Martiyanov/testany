import styled, {css} from 'styled-components'
import userProfileImage from '../../../assets/images/user-profile.png'


export const UserProfile = styled.div`
  display: flex;
  gap: 52px;
  padding: 40px 0;
  flex-wrap: wrap;
  max-width: 700px;
`


interface UserAvatarWrapperProps {
  $isAvatarLoaded: boolean
}

export const UserAvatarWrapper = styled.div<UserAvatarWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 250px;
  align-self: flex-start;
  height: auto;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.mainPrimary};
  aspect-ratio: 1;

  ${({$isAvatarLoaded}) => $isAvatarLoaded ?
          'background: #ffffff'
          :
          css`
            background: url(${userProfileImage}) no-repeat center;
            background-size: contain;
          `
  }
`

export const UserInfo = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
`