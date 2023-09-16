import styled from 'styled-components'

const Container = styled.div`
  padding-left: ${({theme}) => theme.indent};
  padding-right: ${({theme}) => theme.indent};
  margin: 0 auto;
  
  @media (${({theme}) => theme.media.tablet}) {
    width: ${({theme}) => theme.containerWidth.tablet}
  }
  @media (${({theme}) => theme.media.desktop}) {
    width: ${({theme}) => theme.containerWidth.desktop}
  }
`
export default Container