import styled, {css} from 'styled-components'

interface ContentProps {
  $type: 'success' | 'error' | 'warning'
}

const getStyles = (type: 'success' | 'error' | 'warning') => {
  switch (type) {
    case 'success': {
      return css`
        color: chartreuse;
      `
    }
    case 'error': {
      return css`
        
        color: brown;
      `
    }
    case 'warning': {
      return css`
        color: coral;
      `
    }
  }
}

export const Content = styled.p<ContentProps>`
  padding: 40px 20px 20px;
  margin: 0;
  font-size: 20px;
  text-align: center;

  ${props => getStyles(props.$type)}
  
`