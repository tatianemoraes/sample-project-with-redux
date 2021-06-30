import { TYPES } from './types';
import { INITIAL_STATE } from './state';

const { GET_REPOSITORIES, SET_USER } = TYPES; 

const users = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case GET_REPOSITORIES: {
      return {...state, repositories: action.payload}
    }

    case SET_USER: {
      // enviando payload para o estado
      // as alterações que foram feitas na action, só serão manipuladas quando executar o reducer
      return { user: action.payload  }
    }

    default: {
      return state;
    }
  }
}

export default users;
