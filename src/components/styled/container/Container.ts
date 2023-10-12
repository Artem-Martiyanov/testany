import styled from 'styled-components'

const Container = styled.div`
  padding-left: ${({theme}) => theme.indent};
  padding-right: ${({theme}) => theme.indent};
  margin: 0 auto;
  width: 100%;
  
  @media (${({theme}) => theme.media.tablet}) {
    max-width: ${({theme}) => theme.containerWidth.tablet}
  }
  @media (${({theme}) => theme.media.desktop}) {
    max-width: ${({theme}) => theme.containerWidth.desktop}
  }
`
export default Container