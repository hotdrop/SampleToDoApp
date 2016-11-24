import todoApp from './reducers/index.js';

var initialState = todoApp({}, {});
console.log(initialState);

var nextState = todoApp(initialState, {type:'ADD_TODO', id:1, text:'First Todo'});
console.log(nextState)

// node_modules/.bin/browserify -t babelify debug.js -o debug_cmp.js
