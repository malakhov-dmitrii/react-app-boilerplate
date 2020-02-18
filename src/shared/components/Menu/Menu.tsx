import React, { FC } from 'react';
import styles from './Menu.module.scss';
import cn from 'classnames';
import { Menu as AntMenu } from 'antd';
import { MenuProps } from 'antd/lib/menu';

const Menu: FC<MenuProps> = props => {
  return <AntMenu {...props} className={cn(`${props.className}`, styles.Menu)} />;
};

export default Menu;
