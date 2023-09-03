import {CustomButton} from './styledComponents'

// Write your code here
const GradientDirectionItem = props => {
  const {directionObj, getActiveDirectionId, isActive} = props
  const {directionId, displayText} = directionObj
  const opacity = isActive ? 1 : 0.5
  const onCLickDirectionTabItem = () => {
    console.log(directionId)
    getActiveDirectionId(directionId)
  }
  return (
    <li>
      <CustomButton opacity={opacity} onClick={onCLickDirectionTabItem}>
        {displayText}
      </CustomButton>
    </li>
  )
}

export default GradientDirectionItem
