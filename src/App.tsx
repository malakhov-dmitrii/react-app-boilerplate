import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { useDispatch } from 'react-redux';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import { Card } from 'antd';
import Sidebar from './shared/components/Sidebar';
import styles from './App.module.scss';
import cn from 'classnames';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({ type: BalanceActions.GetBalance });
  }, [dispatch]);

  return (
    <>
      <Router>
        <div className={styles.FlexColumn}>
          <div>
            <Header />

            <Card className={cn(styles.Card)}>
              <div className={styles.FlexWrapper}>
                <Sidebar />

                <div className={styles.CardBody}>
                  <Switch>
                    {routes.map(route => (
                      <Route key={route.path} path={route.path} component={route.children} exact={route.path === '/'} />
                    ))}
                  </Switch>
                </div>
              </div>
            </Card>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;

// {
//   "@typescript-eslint": [
//     "error",
//     {
//       "@typescript-eslint/no-explicit-any": false
//     }
//   ],
//   "prettier/prettier": ["error", { "singleQuote": true }]
// },
