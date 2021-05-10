/**
 * @name Layout
 * @author Lester
 * @date 2021-05-07 10:35
 */

import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, withRouter, RouteProps } from 'react-router-dom';
import { Loading } from 'src/components';
import routes from '../pages/routes';

const Routes = withRouter(() => (
    <Suspense fallback={<Loading />}>
        <Switch>
            {
                routes.map((item: RouteProps) => (
                    <Route key={`rt${item.path}`} {...item} exact/>
                ))
            }
            <Redirect from="/*" to="/index"/>
        </Switch>
    </Suspense>
));

const Layout: React.FC = () => {
  useEffect(() => {
    console.log('layout');
  }, []);

  return (
        <Router basename="/tenacity_webapp">
            <Routes />
        </Router>
  );
};

export default Layout;
