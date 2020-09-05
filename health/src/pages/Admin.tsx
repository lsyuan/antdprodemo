import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ButtonBasic from './ButtonBasic';
export default (): React.ReactNode => (
  <PageContainer content=" 这个页面只有 admin 权限才能查看">
    <ButtonBasic />
    <Card>
      <Alert
        message="umi ui 现已发布，欢迎使用 npm run ui 启动体验。"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 48,
        }}
      />
    </Card>
  </PageContainer>
);
