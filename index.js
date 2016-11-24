import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions/index.js';

let store = createStore(function() { return 'Hello' });

var addTodoElem = document.getElementById('addTodo');
var input = addTodoElem.getElementByTagName('input')[0];
var button = addTodoElem.getElementByTagName('button')[0];

button.addEventListener('click', () => {
  var todoText = input.value;
  store.dispatch(addTodo(todoText));
});

var todoList = document.getElementById('todoList');
var elements = todoList.getElementByTagName('li');
var listArray = [...elements];
listArray.forEach((v, index) => {
  v.addEventListener('click', e => {
    store.dispatch(toggleTodo(index));
  });
}) ;

var links = document.getElementById('links');
var childs = links.childNodes;
var childList = [...childs];
childList.filter(v => v.nodeName != '#text').forEach(v => {
  v.addEventListener('click', e => {
    var filterText = v.innerHTML;
    store.dispatch(setVisibilityFilter(filterText));
  });
});
