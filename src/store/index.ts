import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import todos, { TodosState } from './Todos/todos.reducer';
import { createTodo$, getTodosList$ } from './Todos/todos.effect';

export interface Store {
  todos: TodosState;
}

const observableMiddleware = createEpicMiddleware();

const reducers = combineReducers({
  todos,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(observableMiddleware)));

observableMiddleware.run(
  combineEpics<any>(
    getTodosList$,
    createTodo$,
  ),
);
