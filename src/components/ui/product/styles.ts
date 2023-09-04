import styled, {css} from "styled-components";


export const Card = styled.li`
  border: 2px solid ${props => props.theme.colors.mainPrimary};
  padding: 10px;
  border-radius: 5px;
  color: #ff7777;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 2px 2px 5px ${props => props.theme.colors.textSecondary};


  ${props => (props.$isList && css`
    @media (${props => props.theme.media.desktop}) {
      padding: 20px;
      flex-direction: row;
      gap: ${props => props.theme.indent};
    }
  `)}
`

export const Content = styled.p`
  color: ${props => props.theme.colors.textPrimary};
  margin-top: 0;
`


export const Price = styled.p`
  margin: 0 10px 0 0;
  font-size: 24px;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 700;
`

export const ProductImage = styled.div`
  height: 300px;
  margin-bottom: ${props => props.theme.indent};
  flex-shrink: 0;
  

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  ${props => (props.$isList && css`
    @media (${props => props.theme.media.desktop}) {
      height: auto;
      width: 250px;
      margin-bottom: 0;
    }
  `)}
`

export const ProductFooter = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductRating = styled.span`
  color: brown;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`





