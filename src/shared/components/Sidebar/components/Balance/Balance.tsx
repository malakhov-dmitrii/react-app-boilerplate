import React from 'react';
import styles from './Balance.module.scss';
import Button from '../../../Button';
import ButtonPlus from '../../../../Icons/ButtonPlus';
import { useSelector } from 'react-redux';
import { Store } from '../../../../../store';

const Balance = () => {
  // const { balance } = useSelector((state: Store) => state.balance);

  return (
    <div className={styles.Balance}>
      <p className={styles.BalanceTitle}>Баланс</p>
      <p className={styles.BalanceAmount}>
        {(380200 / 100).toFixed(2)}
        <b className={styles.RubleSign}>₽</b>
      </p>
      <Button type="primary" className={styles.Button}>
        <ButtonPlus size={16} fill="white" opacity={1} className={styles.ButtonIcon} />
        <span>Пополнить</span>
      </Button>
    </div>
  );
};

export default Balance;
