import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  return (
    <div className="main-container" data-testid="planets">
      <h1 className="title">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} itemDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
