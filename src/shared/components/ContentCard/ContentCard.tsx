import React, { FC } from 'react';
import styles from './ContentCard.module.scss';
import cn from 'classnames';
import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';

const ContentCard: FC<CardProps> = props => {
  return (
    <Card
      {...props}
      className={cn(`${props.className || ''}`, styles.ContentCard)}
      bodyStyle={{
        padding: '16px 24px',
      }}
    />
  );
};

export default ContentCard;
