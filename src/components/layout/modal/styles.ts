import styled from "styled-components";



export const Wrapper = styled.article`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  padding: ${props => props.theme.indent};
  cursor: pointer;
`

export const Content = styled.div`
  margin: auto;
  padding: ${props => props.theme.indent};
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 700px;
  cursor: auto;
`


export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  
  &::after {
    display: block;
    content: '×';
    font-size: 30px;
    pointer-events: none;
    transition: color ${props => props.theme.animationTransition};
  }

  &:hover, &:focus-visible {
    &::after {
      color: #8d8c8c;
    }
  }
`

export const Header = styled.header`
  position: relative;
  width: 100%;
  padding-right: 50px;
  margin-bottom: 30px;
`

