import { TYPES } from './types';
import api from '../../../services/api';

const { SET_USER, GET_REPOSITORIES } = TYPES;

export function searchUser(user) {
  return async (dispatch) => {
    const { data: { login } } = await api.get(`/users/${user}`);
    await dispatch(infoUser(login));
  }
}

export function infoUser(user) {
  // essa action é a responsável para enviar as informações para o reducer 
  return {
    type: SET_USER, 
    payload: user
  }
}

export function getRepositories(user) {
  return async (dispatch) => {
    const { data } = await api.get(`/users/${user}/repos`);
    await dispatch(repositories(data));
  }
}

export function repositories(repos) {
  return {
    type: GET_REPOSITORIES, 
    payload: repos
  }
}