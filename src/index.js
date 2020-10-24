import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#75483b',
    },
    secondary: {
      main: '#d9a38e',
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
