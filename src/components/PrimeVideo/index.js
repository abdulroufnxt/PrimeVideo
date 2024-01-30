// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')

  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  console.log(actionMovies)

  return (
    <div className="overallCon">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="amazonImage"
      />
      <div className="bottomCon">
        {' '}
        <div className="margine">
          <h1 className="headings"> Action Movies </h1>
          <MoviesSlider data={actionMovies} />
        </div>
        <h1 className="headings"> Comedy Movies </h1>
        <MoviesSlider data={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
