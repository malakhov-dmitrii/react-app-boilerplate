import { Axios } from 'axios-observable';
import { map, delay } from 'rxjs/operators';
import { ToDo } from './todos.reducer';

export const getTodosList = () => {
  return Axios.request({
    url: `https://jsonplaceholder.typicode.com/todos`,
  }).pipe(
    delay(1500),
    map(({ data }) => data),
  );
};

export const createTodo = (data: ToDo) => {
  return Axios.request({
    method: 'POST',
    url: `https://jsonplaceholder.typicode.com/todos`,
    data,
  }).pipe(map(({ data }) => data));
};
