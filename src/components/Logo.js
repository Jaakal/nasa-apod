import React from 'react'
import PropTypes from 'prop-types'

import '../css/Logo.css'

const Logo = ({ headline }) => {
  return (
    <div className="logo">
      <span className="nasa-logo">Nasa</span>
      <span className="apod-logo">
        <span className="dash">&nbsp;-&nbsp;</span>
        {headline}
      </span>
    </div>
  )
}

Logo.propTypes = {
  headline: PropTypes.string.isRequired,
}

export default Logo
