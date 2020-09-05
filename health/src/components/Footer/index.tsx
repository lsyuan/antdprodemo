import React from 'react';
// import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 成都智物云科技有限公司"
    links={[
      {
        key: 'Zhiwuyun',
        title: '智物云官网',
        // title: <GithubOutlined />,
        href: 'http://www.zhiwuyun.cn',
        blankTarget: true,
      }, 
    ]}
  />
);
