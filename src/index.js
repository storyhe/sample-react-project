import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { Container, Wrap } from './styles/main';

import Main from './container/main';
import Header from './component/Header';


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Header />
        <Wrap>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Wrap>
      </Container>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
