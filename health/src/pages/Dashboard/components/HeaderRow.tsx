
import { Col, Row, Tooltip, Select, Button, Radio, Typography } from 'antd';

import { FormattedMessage } from 'umi';
import React from 'react';
const { Title } = Typography;

const topColResponsiveProps = {
    xs: 6,
    sm: 6,
    md: 6,
    lg: 6,
    xl: 6,
    style: { marginBottom: 6 },
};

const topCenterColResponsiveProps = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    style: { marginBottom: 6 },
};


function handleChange(value) {
    console.log(`selected ${value}`);
}


const HeaderRow = () => (
    <Row gutter={24} type="flex">
        <Col {...topColResponsiveProps}>
            <h3 style={{ width: '30%', display: 'inline-block' }}>监测主题：</h3>
            <Select defaultValue="lucy" style={{ width: '70%' }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </Col>
        <Col {...topCenterColResponsiveProps}>
            <Title level={3} style={{ textAlign: "center" }}>智物云卫生信息标准服务动态监测</Title>
        </Col>
        <Col {...topColResponsiveProps} style={{ textAlign: "right" }}>
            <Radio.Group>
                <Radio.Button value="refresh">
                    <FormattedMessage id="dashboard.refresh" defaultMessage="REFRESH" />
                </Radio.Button>
                <Radio.Button value="exprot">
                    <FormattedMessage id="dashboard.export" defaultMessage="EXPORT" />
                </Radio.Button>
            </Radio.Group>
        </Col>
    </Row>
);

export default HeaderRow;
