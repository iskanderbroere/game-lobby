import ApiClient from '../../api/client'
import { loading, showError } from '../loading'

export const FETCH_GAMES = 'FETCH_GAMES'

const api = new ApiClient()

export default function fetchGames() {
  return dispatch => {
    const path = 'games'
    //dispatch(loading(path, true))
    api.get(path)
      .then(res => {
        dispatch({ type: FETCH_GAMES, payload: res.body })
      })
      .catch(err => console.error(err))
      //.catch(err => dispatch(showError(err)))

    // dispatch(loading(path, false))
  }
}
