/**
 * @name UserCenter
 * @author Lester
 * @date 2021-05-07 09:49
 */

import React, { useEffect } from 'react';

const UserCenter: React.FC = () => {
  useEffect(() => {
    console.log('user center');
  }, []);

  return (
        <div>
            用户中心
        </div>
  );
};

export default UserCenter;
