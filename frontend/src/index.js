// `src/index.js`
import React from 'react';
import ReactDOM from 'react-dom';

// Import all of our components
import App from './App';  

// Redux DevTools - completely optional, but this is necessary for it to
// work properly with redux saga.  Otherwise you'd just do:
//
// const store = createStore(
//   IndexReducer,
//   applyMiddleware(sagaMiddleware)
// )


// Setup the top level router component for our React Router
ReactDOM.render(  
  <App />,
  document.getElementById('root')
)