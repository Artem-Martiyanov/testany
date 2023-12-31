import styled, {css} from 'styled-components'


export const ValidatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ValidatorMessageWrapper = styled.div<{ $isActive: boolean }>`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;

  ${props => props.$isActive &&
          css`
            max-height: 100px;
            opacity: 1;
          `
  }
`

export const ValidatorMessage = styled.p`
  margin: 0;
  padding: 2px;
  color: brown;
  font-size: 12px;
  width: 100%;
`