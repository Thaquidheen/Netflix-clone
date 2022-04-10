import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthContextProvide } from './context/authContext/authContext';
import { MovieContextProvide } from './context/movieContext/movieContext';
import {ListContextProvide} from './context/listContext/listContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvide>
      <MovieContextProvide>
        <ListContextProvide>
        <App/>
        </ListContextProvide>
      </MovieContextProvide>
    </AuthContextProvide>
  </React.StrictMode>,
  document.getElementById('root')
);


