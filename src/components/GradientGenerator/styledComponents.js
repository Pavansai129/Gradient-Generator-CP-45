// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: ${props => props.bgImage};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
`

export const Heading = styled.h1`
  color: blue;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 40px;
`

export const Paragraph = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
`

export const ColorCode = styled(Paragraph)`
  font-size: 25px;
`

export const CustomInput = styled.input`
  width: 300px;
  height: 200px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 75%;
`
export const GradientDirectionTabContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
