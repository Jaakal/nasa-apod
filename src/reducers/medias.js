import {
  ADD_MEDIAS_INFO
} from '../actions/types'

const shuffle = array => {
  let i, j, temp

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i];
    array[i] = array[j]
    array[j] = temp
  }

  return array
};

const initialState = {
  mediasInfo: [],
  loading: true
}

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case ADD_MEDIAS_INFO:
      return {
        mediasInfo:  shuffle(payload.mediasInfo),
        loading: false
      }
    default:
      return state
  }
}

export default reducer
