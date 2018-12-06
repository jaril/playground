var unique = require('uniq');
var redux = require('redux');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

var createStore = require('redux').createStore;

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(
  todos,
  ['Use Redux'],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

store.dispatch({
  type: 'ADD_TODO',
  text: 'Check if this runs'
})

console.log(store.getState())
console.log('mwahahahahahahhaa12')
