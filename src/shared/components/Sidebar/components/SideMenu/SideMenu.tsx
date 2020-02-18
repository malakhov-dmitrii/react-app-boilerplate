import React from 'react';
import styles from './SideMenu.module.scss';
import { Menu } from 'antd';
import routes from '../../../../../routes';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Abonement, Check, History, Parkings } from '../../../../Icons/NavSvg';

const icons: any = {
  parkings: Parkings,
  history: History,
  abonement: Abonement,
  check: Check,
};

const SideMenu = () => {
  const history = useHistory();
  const activePath = routes.find(route => route.path === history.location.pathname);

  return (
    <Menu selectedKeys={[activePath ? String(activePath.id) : '1']} className={styles.Menu}>
      {routes
        .filter(route => route.useWith.includes('sidebar'))
        .map((route: any) => {
          const Icon = icons[route.icon || 'parkings'];
          return (
            <Menu.Item key={String(route.id)} className={styles.MenuItem}>
              <Link to={route.path} className={styles.Link}>
                <Icon className={styles.Icon} />
                {route.title || 'Неизвестно'}
              </Link>
            </Menu.Item>
          );
        })}
    </Menu>
  );
};

export default SideMenu;
