// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.button`
  height: 40px;
  width: 140px;
  padding: 2px;
  border-radius: 3px;
  border: none;
  opacity: ${props => props.opacity};
  margin-right: 20px;
`
