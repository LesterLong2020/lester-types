/**
 * @name routes
 * @author Lester
 * @date 2021-05-07 09:35
 */

import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const routes: RouteProps[] = [{
  path: '/index',
  component: lazy(() => import('src/pages/Index/Index'))
}, {
  path: '/userCenter',
  component: lazy(() => import('src/pages/UserCenter/UserCenter'))
}];

export default routes;
