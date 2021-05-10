/**
 * @name Index
 * @author Lester
 * @date 2021-05-07 09:26
 */

import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { Icon } from 'src/components';
import { Context } from 'src/store';
import style from './style.module.less';

const Index: React.FC<RouteComponentProps> = ({ history }) => {
  const { userInfo, setUserInfo } = useContext(Context);

  useEffect(() => {
    console.log({
      a: 1,
      b: 2
    });
    console.log(userInfo);
    setUserInfo({
      world: 'long',
      more: 'sun'
    });
  }, []);

  return (
    <div className={style.wrap}>
      首页2 {userInfo.name}
      <Icon className={style.icon} name="jiazai" />
      <Button type="primary" onClick={() => history.push('/userCenter')}>
        前往
      </Button>
      <img className={style.img} src={require('src/assets/images/bg.jpg')} alt="" />
    </div>
  );
};

export default Index;
