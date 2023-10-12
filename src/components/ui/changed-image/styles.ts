import styled, {css} from 'styled-components'



export const HoverBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.15s ease;
  background-color: rgba(0, 0, 0, 0.3);
`

export const RemoveButton = styled.button`
    margin-left: auto;
    border: none;
    background: none;
    color: #ffffff;
    border-radius: 3px;
    cursor: pointer;
    padding: 0 2px;
    font-size: 20px;
    
    svg {
        display: block;
    }
`


const panel = css`
    background-color: rgba(0, 0, 0, 0.6);
    transition: transform 0.15s ease;
    padding: 5px;
`

export const TopPanel = styled.div`
    ${panel};
    transform: translateY(-100%);
    display: flex;
    justify-content: flex-end;
    
`

export const BottomPanel = styled.div`
    ${panel};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(100%);
    display: flex;
  justify-content: center;

`

export const ImageWrapper = styled.article`
  position: relative;
  height: 100%;
  width: 100%;
  
  &:hover {
    ${HoverBackground} {
      opacity: 1;
    }
      
      ${TopPanel} {
          transform: translateY(0);
      }
    
      ${BottomPanel} {
          transform: translateY(0);
      }
  }
`

export const FileInputLabel = styled.label`
  position: relative;
  display: flex;
  gap: 14px;
  cursor: pointer;
  align-items: center;
  color: #ffffff;
  font-size: 12px;
  
`

export const FileInput = styled.input`
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
`

