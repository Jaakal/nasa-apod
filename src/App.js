import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './css/reset.css'
import './css/App.css'

import MediasForm from './components/MediasForm'
import MediasList from './components/MediasList'
import MediaInfo from './components/MediaInfo'
import Logo from './components/Logo'
import Loader from './components/Loader'

import { addMediasInfo } from './actions/medias'
import fetchMediasInfo from './utility/fetchMedias'

const App = ({ medias: { loading }, addMediasInfo }) => {
  const [media, setMedia] = useState(null)

  useEffect(() => {
    if (loading)
      fetchMediasInfo(addMediasInfo)
  }, [loading, addMediasInfo])

  return (
    <>
      {loading ? <Loader/> :
        <div className="app">
          {media ? <MediaInfo media={media} setMedia={setMedia}/> :
            <>          
              <Logo headline={'A Picture of the Day'}/>
              <MediasForm/>
              <MediasList setMedia={setMedia}/>
            </>
          }
        </div>
      }
    </>
  )
}

App.propTypes = {
  medias: PropTypes.object.isRequired,
  addMediasInfo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  medias: state.medias
})

const mapDispatchToProps = dispatch => ({
  addMediasInfo: state => {
    dispatch(
      addMediasInfo(state)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
