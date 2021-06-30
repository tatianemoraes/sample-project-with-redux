import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { searchUser, repositories } from '../store/modules/users/actions';

function Home() {

  const [user, setUser] = useState('');
  const history = useHistory();

  const dispatch = useDispatch();

  // quando voltar para a página home, limpar a página repositories
  dispatch(repositories(null));

  const searchRoute = () => {
    dispatch(searchUser(user));
    history.push('/repositories');
  };

  return (
    <>
      <label htmlFor="">Digite seu usuário</label>
      <input 
        type="text" 
        name='user'
        value={user && user}
        onChange={(e) => setUser(e.target.value) }
      />
      <button
        onClick={() => searchRoute()}
      >
        Buscar
      </button>
    </>
  );
}

export default Home;

/*
libs para add:

 - react-redux
 - redux
 - redux-thunk
 - redux-devtools-extension
*/