import ApiClient from '../../api/client'
import { loading, showError } from '../loading'

export const CREATE_GAME = 'CREATE_GAME'

const api = new ApiClient()

export default function createGame() {
  return dispatch => {
    console.log('hi')
    const path = 'games'
    //dispatch(loading(path, true))
    api.post(path)
      .then(res => {
        console.error(res)
        // dispatch({ type: CREATE_GAME, payload: res.body })
      })
      .catch(err => console.error(err))
      //.catch(err => dispatch(showError(err)))

    // dispatch(loading(path, false))
  }
}
