import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAll } from './reducers/songReducer';

import Search from './components/Search';
import SongList from './components/SongList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Anecdotes</h1>
      <Search />
      <SongList />
    </div>
  );
};

export default App;