import {
  ADD_MEDIAS_INFO,
  MODIFY_FILTER
} from './types'

export const addMediasInfo = mediasInfo => ({
  type: ADD_MEDIAS_INFO,
  mediasInfo
})

export const modifyFilter = filter => ({
  type: MODIFY_FILTER,
  filter
})
