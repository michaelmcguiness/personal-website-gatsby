import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

function App() {
  const [state, setState] = useState({
    hello: null
  });

  useEffect(() => {
    axiosInstance.get('/posts')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {state.hello
        ? <div> {state.hello} </div>
        : null}
    </div>
  );
}

export default App;
