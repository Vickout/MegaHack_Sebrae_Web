import { Col, Row } from 'antd';
import React from 'react';
import './styles.css';

const HeaderSystem = () => {

    return (
        <>
            <Row gutter={16}>
                <Col span={3}>
                    <div className="nomeSistema">Consilio</div>
                </Col>
            </Row>
        </>
    );
}

export default HeaderSystem;