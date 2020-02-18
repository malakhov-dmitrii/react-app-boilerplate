import Todos from './scenes/Todos';
import Welcome from './scenes/Welcome';

export default [
  {
    id: 1,
    path: '/',
    children: Welcome,
    useWith: ['header'],
  },
  {
    id: 2,
    path: '/todos',
    title: 'Todo`s List',
    children: Todos,
    useWith: ['sidebar'],
  }
];
