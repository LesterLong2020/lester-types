/**
 * @name Layout
 * @author Lester
 * @date 2021-05-07 10:35
 */

import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, withRouter, RouteProps } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Loading } from 'src/components';
import Context from 'src/store';
import routes from '../pages/routes';
import './style.less';

const Routes = withRouter(({ location }) => (
  <TransitionGroup className="transition-wrap">
    <CSSTransition timeout={300} classNames={'fade'} key={location.pathname}>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((item: RouteProps) => (
            <Route key={`rt${item.path}`} {...item} exact />
          ))}
          <Redirect from="/*" to="/index" />
        </Switch>
      </Suspense>
    </CSSTransition>
  </TransitionGroup>
));

const Layout: React.FC = () => {
  useEffect(() => {
    console.log('layout');
  }, []);

  return (
    <Router basename="/tenacity_webapp">
      <Context>
        <Routes />
      </Context>
    </Router>
  );
};

export default Layout;
