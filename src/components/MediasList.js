import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../css/MediasList.css'

import { isFirstDateSmaller } from '../utility/date'

import Media from './Media'

const filterMedias = (mediasInfo, filter) => {
  return mediasInfo.filter(mediaInfo => {
    if (filter.category !== 'All' && filter.category !== mediaInfo.category.name) return false
    if (isFirstDateSmaller(mediaInfo.date, filter.startDate)
      || isFirstDateSmaller(filter.endDate, mediaInfo.date)) return false

    return true
  })
}

const MediasList = ({ medias: { mediasInfo }, filter, setMedia }) => {
  const [filteredMedias, setFilteredMedias] = useState([])

  useEffect(() => {
    setFilteredMedias(filterMedias(mediasInfo, filter))
  }, [mediasInfo, filter])

  const onClick = media => setMedia(media)

  return (
    <div className="image-board">
      <span/>
      <span/>
      <span/>
      <span/>
      {filteredMedias.map(media => <Media key={media.url} media={media} onClick={onClick}/>)}
    </div>
  )
}

MediasList.propTypes = {
  medias: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
  setMedia: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  medias: state.medias,
  filter: state.mediasFilter
})

export default connect(mapStateToProps)(MediasList)
