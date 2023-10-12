import styled from 'styled-components'
import userProfileImage from '../../../assets/images/user-profile.png'


export const UserProfile = styled.div`
  display: flex;
  gap: 14px;
  padding: 40px 0;
  flex-wrap: wrap;
`

export const UserAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 250px;
  height: auto;
  width: 100%;
  background: url(${userProfileImage}) no-repeat center;
  background-size: contain;
  overflow: hidden;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.mainPrimary};
  aspect-ratio: 1;

  img {
    box-shadow: 0 0 0 1000px #ffffff;
  }
`

export const UserInfo = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
  flex-wrap: wrap;
`