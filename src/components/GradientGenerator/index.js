import {Component} from 'react'
import {
  AppContainer,
  Container,
  Heading,
  Paragraph,
  ColorCode,
  CustomInput,
  ColorInputContainer,
  GradientDirectionTabContainer,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    colorCodeOne: '#8ae323',
    colorCodeTwo: '#014f7b',
    codeOne: '',
    codeTwo: '',
    directionId: gradientDirectionsList[0].value,
    activeDirectionId: gradientDirectionsList[0].directionId,
  }

  onChangeInputOne = event => {
    this.setState({colorCodeOne: event.target.value})
  }

  onChangeInputTwo = event => {
    this.setState({colorCodeTwo: event.target.value})
  }

  getActiveDirectionId = id => {
    this.setState({activeDirectionId: id})
  }

  onClickGenerate = () => {
    const {colorCodeOne, colorCodeTwo, activeDirectionId} = this.state
    // console.log(activeDirectionId)
    const valueObj = gradientDirectionsList.filter(
      each => each.directionId === activeDirectionId,
    )
    const {value} = valueObj[0]
    console.log(value)
    this.setState({
      codeOne: colorCodeOne,
      codeTwo: colorCodeTwo,
      directionId: value,
    })
  }

  render() {
    const {
      codeOne,
      codeTwo,
      directionId,
      colorCodeOne,
      colorCodeTwo,
      activeDirectionId,
    } = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        bgImage={`linear-gradient(to ${directionId} , ${codeOne}, ${codeTwo})`}
      >
        <Container>
          <Heading>Generate a Css Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <GradientDirectionTabContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                directionObj={each}
                isActive={activeDirectionId === each.directionId}
                getActiveDirectionId={this.getActiveDirectionId}
              />
            ))}
          </GradientDirectionTabContainer>
          <Paragraph>Pick the Colors</Paragraph>
          <ColorInputContainer>
            <Container>
              <ColorCode>{colorCodeOne}</ColorCode>
              <CustomInput
                type="color"
                onChange={this.onChangeInputOne}
                value={colorCodeOne}
              />
            </Container>
            <Container>
              <ColorCode>{colorCodeTwo}</ColorCode>
              <CustomInput
                type="color"
                onChange={this.onChangeInputTwo}
                value={colorCodeTwo}
              />
            </Container>
          </ColorInputContainer>
          <button type="button" onClick={this.onClickGenerate}>
            Generate
          </button>
        </Container>
      </AppContainer>
    )
  }
}

export default GradientGenerator
