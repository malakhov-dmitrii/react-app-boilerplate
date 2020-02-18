import React, { FC, ReactElement } from 'react';
import styles from './FormRowItem.module.scss';
import Text from 'antd/lib/typography/Text';
import { isNumber } from 'util';

interface FormRowItemProps {
  label: string | ReactElement;
  marginBottom?: number;
}

const FormRowItem: FC<FormRowItemProps> = ({ label, marginBottom, children }) => {
  return (
    <div
      className={styles.FormRowItem}
      style={{
        marginBottom: (isNumber(marginBottom) ? marginBottom : 16) + 'px',
      }}
    >
      <Text className={styles.FormRowItemText}>{label}</Text>
      {children}
    </div>
  );
};

export default FormRowItem;
