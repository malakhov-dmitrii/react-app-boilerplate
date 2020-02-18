import React, { FC } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';

const Button: FC<ButtonProps> = props => {
  return <AntButton {...props} className={cn(`${props.className || ''}`, styles.Button)} />;
};

export default Button;
