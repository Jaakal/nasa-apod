import {
  MODIFY_FILTER
} from '../actions/types'

import { getDateDaysAgo } from '../utility/date';

const defaultFilter = {
  startDate: {
    year: parseInt(getDateDaysAgo(5).year, 10),
    month: parseInt(getDateDaysAgo(5).month, 10),
    day: parseInt(getDateDaysAgo(5).day, 10),
  },
  endDate: {
    year: parseInt(getDateDaysAgo(1).year, 10),
    month: parseInt(getDateDaysAgo(1).month, 10),
    day: parseInt(getDateDaysAgo(1).day, 10),
  },
  category: 'All',
}

const mediasFilter = (state = defaultFilter, payload) => {
  switch (payload.type) {
    case MODIFY_FILTER:
      return { ...state, ...payload.filter }
    default:
      return state
  }
}

export default mediasFilter