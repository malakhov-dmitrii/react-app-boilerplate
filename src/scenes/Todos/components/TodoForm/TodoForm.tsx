import React, { FC, useState } from 'react';
import styles from './TodoForm.module.scss';
import Title from 'antd/lib/typography/Title';
import ContentCard from '../../../../shared/components/ContentCard';
import Text from 'antd/lib/typography/Text';
import { Checkbox, Input, Select } from 'antd';
import Button from '../../../../shared/components/Button';
import { useSelector } from 'react-redux';
import { Store } from '../../../../store';
import { ToDoObject } from '../../Todos';
import FormRowItem from '../../../../shared/components/FormRowItem';
import { Option } from '../../../../shared/interfaces/shared';

interface TodoForm {
  selectSourceOptions: Option[];
  selectTypeOptions: Option[];
  selectEstimatesOptions: Option[];
  onConfirm: (res: ToDoObject) => void;
}

const TodoForm: FC<TodoForm> = ({ selectEstimatesOptions, selectSourceOptions, selectTypeOptions, onConfirm }) => {
  const { Option } = Select;
  const { isLoading } = useSelector((state: Store) => state.todos);

  const [todoType, setTodoType] = useState('easy');
  const [todoSource, setTodoSource] = useState('github');
  const [todoEstimates, setTodoEstimates] = useState('today');
  const [todoValue, setTodoValue] = useState('Lorem...');

  const selectBeforeType = (
    <Select defaultValue={todoType} style={{ width: 90 }} onChange={setTodoType}>
      {selectTypeOptions.map(option => (
        <Option key={option.value} value={option.value}>
          {option.title}
        </Option>
      ))}
    </Select>
  );

  const selectSource = (
    <Select defaultValue={todoSource} style={{ width: 250 }} onChange={setTodoSource}>
      {selectSourceOptions.map(option => (
        <Option key={option.value} value={option.value}>
          {option.title}
        </Option>
      ))}
    </Select>
  );

  const selectDuration = (
    <Select defaultValue={todoEstimates} style={{ width: 250 }} onChange={setTodoEstimates}>
      {selectEstimatesOptions.map(option => (
        <Option key={option.value} value={option.value}>
          {option.title}
        </Option>
      ))}
    </Select>
  );

  const handleInputChange = (e: any) => {
    setTodoValue(e.target.value);
  };

  return (
    <ContentCard>
      <Title level={3}>Добавить ебаную задачу</Title>

      <div className={styles.FormRow}>
        <FormRowItem label="Текст ебаного задания">
          <Input
            addonBefore={selectBeforeType}
            defaultValue={todoValue}
            onChange={handleInputChange}
            value={todoValue}
          />
        </FormRowItem>

        <FormRowItem label="Где даелаем?">{selectSource}</FormRowItem>

        <FormRowItem label="Когда сделаем?">{selectDuration}</FormRowItem>
      </div>

      <div className={styles.ConfirmRow}>
        <div>
          <Checkbox>Бесполезный чекбокс</Checkbox>
          <br />
          <Text>Какой-то левый текст</Text>
        </div>

        <Button
          className={styles.ConfirmButton}
          type={isLoading ? 'dashed' : 'primary'}
          onClick={() =>
            onConfirm({
              type: todoType,
              src: todoSource,
              value: todoValue,
              est: todoEstimates,
            })
          }
        >
          Создать
        </Button>
      </div>
      <br />
    </ContentCard>
  );
};

export default TodoForm;
