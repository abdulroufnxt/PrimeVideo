// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {pass} = props
  return (
    <div className="ccc">
      <Popup
        modal
        trigger={
          <img className="pop" src={pass.thumbnailUrl} alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="popupCon">
            <button
              data-testid="closeButton"
              className="closeButton"
              type="button"
              onClick={() => close()}
            >
              {' '}
              <IoMdClose color="#231f20" size={20} />
            </button>
            <div className="vPlayer">
              <ReactPlayer className="vPlayer" url={pass.videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
