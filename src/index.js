import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import FavoriteRecipeList from './components/FavoriteRecipeList';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { setRecipes } from './actions';
import rootReducer from './reducers';

// Creating the Store
const store = createStore(rootReducer);
//console.log('store.getState()', store.getState());

store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/favorites' component={FavoriteRecipeList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
