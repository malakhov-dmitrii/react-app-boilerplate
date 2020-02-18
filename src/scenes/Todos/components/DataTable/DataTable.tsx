import React from 'react';
import styles from './DataTable.module.scss';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Table, Tag } from 'antd';
import { ToDo } from '../../../../store/Todos/todos.reducer';
import Button from '../../../../shared/components/Button';
import { useSelector } from 'react-redux';
import { Store } from '../../../../store';

const columns = [
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Завершено',
    dataIndex: 'completed',
    key: 'completed',
    render: (completed: boolean, record: ToDo) => {
      const color = !completed ? 'volcano' : 'green';

      return (
        <Tag color={color} key={record.id}>
          {completed ? '✅' : '❌'}
        </Tag>
      );
    },
  },
  {
    title: 'ID автора',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '',
    key: 'id',
    render: (text: string, record: ToDo) => (
      <div className={styles.ButtonRow} key={record.id}>
        <Button className={styles.StopButton}>Остановить</Button>
        <Button type="primary" className={styles.ProlongateButton}>
          Продлить
        </Button>
      </div>
    ),
  },
];

const DataTable = () => {
  const { data } = useSelector((state: Store) => state.todos);

  return (
    <div className={styles.DataTable}>
      <Title level={3} disabled={!data}>
        Текущие задачи
      </Title>
      {!data && <Text disabled>Появятся здесь, когда будут</Text>}

      {data && (
        <Table
          pagination={{
            pageSize: 5,
          }}
          columns={columns}
          dataSource={data?.map(item => ({ ...item, key: item.id }))}
        />
      )}
    </div>
  );
};

export default DataTable;
