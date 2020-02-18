import { handleActions } from 'redux-actions';
import { TodosActions } from './todos.actions';

export interface ToDo {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  data: ToDo[] | null;
  isLoading: boolean;
  error: boolean;
}

export const initialState: TodosState = {
  data: null,
  isLoading: false,
  error: false,
};

export default handleActions(
  {
    // --------------- PENDING --------------------------
    [TodosActions.GetTodosList](state: TodosState) {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    },
    [TodosActions.CreateNewTodo](state: TodosState) {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    },
    [TodosActions.DeleteTodo](state: TodosState) {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    },

    // --------------- ERROR --------------------------
    [TodosActions.GetTodosListError](state: TodosState) {
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    },

    [TodosActions.CreateNewTodoError](state: TodosState) {
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    },

    [TodosActions.DeleteTodoError](state: TodosState) {
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    },

    // --------------- SUCCESS --------------------------
    [TodosActions.GetTodosListSuccess](state: TodosState, { payload: { data } }: any) {
      return {
        ...state,
        error: false,
        isLoading: false,
        data: data,
      };
    },
    [TodosActions.CreateNewTodoSuccess](state: TodosState) {
      return {
        ...state,
        isLoading: false,
        // data: state.data?.push(data)
      };
    },
    // [TodosActions.DeleteTodoSuccess](state: ITodosState, {payload: {data}}: any) {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         data: data
    //     };
    // }
  },
  initialState,
);
