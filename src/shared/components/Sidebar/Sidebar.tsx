import React, { FC } from 'react';
import styles from './Sidebar.module.scss';
import Balance from './components/Balance';
import SideMenu from './components/SideMenu';

const Sidebar: FC = () => {
  return (
    <div className={styles.Sidebar}>
      <Balance />
      <SideMenu />
    </div>
  );
};

export default Sidebar;
