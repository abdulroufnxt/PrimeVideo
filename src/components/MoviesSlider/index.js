// Write your code here

import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const MoviesSlider = props => {
  const {data} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {data.map(each => (
        <MovieItem pass={each} key={each.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
