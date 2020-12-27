import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../css/MediasForm.css'

import { getDateDaysAgo, parseDateString } from '../utility/date'
import { modifyFilter } from '../actions/medias'

const CATEGORIES = [
  {
    name: 'A Picture of the Day',
    url: 'a-picture-of-the-day'
  },
  {
    name: 'Mars Rover Photos',
    url: 'mars-rover-photos'
  },
  {
    name: 'Earth Polychromatic Imaging Camera',
    url: 'earth-polychromatic-imaging-camera'
  }
]

const TIME_RANGE = {
  MAX: getDateDaysAgo(1).string,
  MIN: getDateDaysAgo(5).string
}
Object.freeze(TIME_RANGE)

const MediasForm = ({ filter, modifyFilter }) => {
  const [startDate, setStartDate] = useState(`${filter.startDate.year}-${filter.startDate.month}-${filter.startDate.day}`)
  const [endDate, setEndDate] = useState(`${filter.endDate.year}-${filter.endDate.month}-${filter.endDate.day}`)
  const [category, setCategory] = useState(filter.category)

  const handleChange = event => {
    switch (event.target.id) {
      case 'start-date':
        setStartDate(event.target.value);
        modifyFilter({
          startDate: parseDateString(event.target.value)
        })
        break
      case 'end-date':
        setEndDate(event.target.value);
        modifyFilter({
          endDate: parseDateString(event.target.value)
        });
        break
      case 'category':
        setCategory(event.target.value)
        modifyFilter({
          category: event.target.value
        })
        break
      default:
        break
    }
  }

  return (
    <form className="image-form">
      <div className="input-wrapper">
        <label htmlFor="start-date">
          Date from:
          <input type="date" onChange={handleChange} value={startDate} id="start-date" name="start-date" min={TIME_RANGE.MIN} max={endDate} />
        </label>
      </div>

      <div className="input-wrapper">
        <label htmlFor="end-date">
          Date to:
          <input type="date" onChange={handleChange} value={endDate} id="end-date" name="end-date" min={startDate} max={TIME_RANGE.MAX} />
        </label>
      </div>

      <div className="select-wrapper">
        <select onChange={handleChange} id="category" value={category}>
          <option key="all">All</option>
          {CATEGORIES.map((category, index) => <option key={index}>{category.name}</option>)}
        </select>
      </div>
    </form>
  );
};

MediasForm.propTypes = {
  filter: PropTypes.object.isRequired,
  modifyFilter: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  filter: state.mediasFilter
})

const mapDispatchToProps = dispatch => ({
  modifyFilter: filter =>
    dispatch(
      modifyFilter(filter)
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(MediasForm)
