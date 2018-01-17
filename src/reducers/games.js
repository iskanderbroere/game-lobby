import { CREATE_GAME } from '../actions/games/creategame'
import { FETCH_GAMES } from '../actions/games/fetchgames'

const initgames = [
  {
    name: "hans"
  }
]

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case CREATE_GAME :
      return '' + payload
    case FETCH_GAMES :
      return state
    default :
      return state
  }
}