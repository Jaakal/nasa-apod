import React from 'react';
import PropTypes from 'prop-types';

import '../css/MediaInfo.css';
import '../css/Loader.css';

import Media from './Media'
import Logo from './Logo'

const MediaInfo = ({
  media,
  media: {
    category,
    title,
    date,
    explanation
  },
  setMedia
}) => {
  const titleContainer = (
    <div className="media-info-title-wrapper">
      <span>Earth Polychromatic</span>
      <span className="space">&nbsp;</span>
      <span>Imaging Camera</span>
    </div>
  );

  return (
    <div className="info-container">
      <Logo headline={category.name === 'Earth Polychromatic Imaging Camera' ? titleContainer : category.name}/>
      <div className="info-wrapper">
        <span />
        <span />
        <span />
        <span />
        <div className="media-info-media-wrapper">
          <Media media={media} onClick={() => {}}/>
        </div>
        <div className="title">{title.name}</div>
        <div className="date">{date.string}</div>
        <div className="explanation">{explanation}</div>
        <button type="button" onClick={() => setMedia(null)}>Main Page</button>
      </div>
    </div>
  )
};

MediaInfo.propTypes = {
  media: PropTypes.object.isRequired,
  setMedia: PropTypes.func.isRequired,
};

export default MediaInfo
