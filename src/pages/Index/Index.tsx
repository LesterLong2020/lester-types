/**
 * @name Index
 * @author Lester
 * @date 2021-05-07 09:26
 */

import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { Icon, CarouselText } from 'src/components';
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
      首页 {userInfo.name}
      <Icon className={style.icon} name="jiazai" />
      <div className={style.contentCarousel}>
        <CarouselText>蒹葭苍苍,白露为霜,所谓伊人,在水一方</CarouselText>
      </div>
      <div className={style.contentCarousel}>
        <CarouselText>天涯漫漫长路，可堪回首，可期未来？诚寂寥，难堪也！岂非天命耶？天时敢问何时至！</CarouselText>
      </div>
      <Button type="primary" onClick={() => history.push('/userCenter')}>
        前往 用户中心
      </Button>
      <img className={style.img} src={require('src/assets/images/bg.jpg')} alt="" />
    </div>
  );
};

export default Index;
