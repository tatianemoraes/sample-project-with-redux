import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepositories } from '../store/modules/users/actions';

function Repositories() {

  const dispatch = useDispatch();

  const { user, repositories } = useSelector(state => state.users);

  useEffect(() => {
    if(user) {
      dispatch(getRepositories(user));
    }
  }, [dispatch, user]);

  return (
    <>
      <div className='repositories'>
        {
          repositories && repositories.map((repository) => (
            <div key={repository.id}>
              <h1>Nome Repositorio: {repository.name}</h1>
              <a href={repository.html_url} target='blank'>
                Link Repositorio: {repository.html_url}
              </a>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Repositories;