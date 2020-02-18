import React, { FC, useEffect, useState } from 'react';
import Title from 'antd/lib/typography/Title';
import { useDispatch } from 'react-redux';
import { TodosActions } from '../../store/Todos/todos.actions';
import Text from 'antd/lib/typography/Text';
import { Modal } from 'antd';
import DataTable from './components/DataTable';
import TodoForm from './components/TodoForm';
import { Option } from '../../shared/interfaces/shared';

/**
 * @interface
 * Задача в том виде, в котором она будет отправлена на сервер
 * Все используемые интерфейсы должны иметь описания полей
 * TODO: можно использовать enum для полей type, src, est
 * */
export interface ToDoObject {
  /** Тип задачи, первичная оценка :) */
  type?: string;
  /** С использованием чего данная задача будет исполнена */
  src?: string;
  /** Еще оценка */
  est?: string;
  /** Описание задачи */
  value?: string;
}

const selectTodoSourceOptions: Option[] = [
  {
    title: 'GitHub',
    value: 'github',
  },
  {
    title: 'Google',
    value: 'google',
  },
  {
    title: 'Rambler',
    value: 'rambler',
  },
  {
    title: 'GitLab',
    value: 'gitlab',
  },
];
const selectTodoTypeOptions: Option[] = [
  {
    title: 'Изи',
    value: 'easy',
  },
  {
    title: 'Норм так',
    value: 'normal',
  },
  {
    title: 'Надо подзаебаться',
    value: 'hard',
  },
  {
    title: 'За час сделаем',
    value: 'forever',
  },
];
const selectTodoEstimatesOptions: Option[] = [
  {
    title: 'Ща сделаем',
    value: 'fast',
  },
  {
    title: 'Сегодня',
    value: 'today',
  },
  {
    title: 'Ну за денек успеем',
    value: 'inaday',
  },
];

const todoObj: ToDoObject | null = {};

/**
 * Пример реализации экрана приложения с использованием:
 * - SCSS Модулей стилей
 * - Взаимодействия с сервером
 * - Redux:
 * - - Actions
 * - - Epics(side-effects)
 * - - Store & useSelector(...)
 */
const Todos: FC = () => {
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todoObject, setTodoObject] = useState(todoObj);

  useEffect(() => {
    dispatch({ type: TodosActions.GetTodosList });
  }, [dispatch]);

  const handleFormConfirm = (e: ToDoObject) => {
    setTodoObject(e);
    setIsModalVisible(true);
    dispatch({ type: TodosActions.CreateNewTodo, payload: e });
  };

  return (
    <>
      <Title>Список задач</Title>

      <TodoForm
        selectSourceOptions={selectTodoSourceOptions}
        selectTypeOptions={selectTodoTypeOptions}
        selectEstimatesOptions={selectTodoEstimatesOptions}
        onConfirm={handleFormConfirm}
      />

      <DataTable />

      <Modal
        title="Ебаная задача отправлена"
        visible={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
          setTodoObject({});
        }}
        onCancel={() => {
          setIsModalVisible(false);
          setTodoObject({});
        }}
      >
        <Text>
          {`${selectTodoTypeOptions.find(o => o.value === todoObject.type)?.title} задача ${
            todoObject.value
          } будет сделана через ${selectTodoSourceOptions.find(o => o.value === todoObject.src)?.title} за ${
            selectTodoEstimatesOptions.find(o => o.value === todoObject.est)?.title
          }`}
        </Text>
      </Modal>
    </>
  );
};

export default Todos;
