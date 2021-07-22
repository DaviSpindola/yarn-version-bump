import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import './css/index.css';

const YARN_LOGO_IMAGE_ADDRESS = 'https://avatars.githubusercontent.com/u/22247014?s=400&v=4';

const initialProps = {
  logo: YARN_LOGO_IMAGE_ADDRESS,
  version: process.env.REACT_APP_VERSION,
}

ReactDOM.render(
  <React.StrictMode>
    <App {...initialProps}/>
  </React.StrictMode>,
  document.getElementById('root')
);