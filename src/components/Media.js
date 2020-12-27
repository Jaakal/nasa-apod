import React, { useEffect, useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import '../css/Media.css'

import Loader from './Loader'

const Media = ({
  media,
  media: {
    category,
    url,
    mediaType,
    title
  },
  onClick
}) => {
  const mediaRef = useRef(null)
  
  const [loading, setLoading] = useState(true)

  const mediaLoaded = useCallback(() => {
    setLoading(false)
  }, [setLoading])

  useEffect(() => {
    const mediaElement = mediaRef.current
    mediaElement.addEventListener('load', mediaLoaded)
    return () => mediaElement.removeEventListener('load', mediaLoaded)
  }, [mediaLoaded])

  useEffect(() => {
    if (!loading)
      mediaRef.current.style.opacity = 1
  }, [loading])

  const mediaElement = mediaType === 'video' ?
    <iframe src={url} className="media" ref={mediaRef} alt={category.name} title={title.name}/> :
    <img src={url} className="media" ref={mediaRef} alt={category.name}/>
  
  return (
    <div className="media-wrapper" onClick={() => onClick(media)}>
      {loading && <Loader/>}
      {mediaElement}
    </div>
  )
};

Media.propTypes = {
  media: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Media
