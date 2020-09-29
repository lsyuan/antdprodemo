import React from 'react';
// import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 XXX"
    links={[
      {
        key: 'XXX',
        title: 'XXX',
        // title: <GithubOutlined />,
        href: 'http://www.baidu.com',
        blankTarget: true,
      }, 
    ]}
  />
);
