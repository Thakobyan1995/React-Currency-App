import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 

import Header from './components/header/Header';
import List from './components/list/List';
import NotFound from '../src/components/not-found/NotFound';
import Details from '../src/components/details/Detail';
import './index.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/currency/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
