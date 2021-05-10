/**
 * @name index
 * @author Lester
 * @date 2021-05-06 15:15
 */

import React from 'react';
import ReactDom from 'react-dom';
import 'src/utils/setup'; // 主动执行文件
import App from 'src/layout/Layout';
import './index.css';

ReactDom.render(
    <App />,
    document.getElementById('root')
);
