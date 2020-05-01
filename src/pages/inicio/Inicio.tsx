import React from 'react';
import Venda from '../Venda';
import { Row, Col } from 'antd';

const Inicio = () => {

    return (
        <>
        <Row>
            <Col span={3}>
                <Venda />
            </Col>
            <Col span={3} offset={8}>
                <Venda />
            </Col>
        </Row>
        <Row>
            <Col span={3}>
                <Venda />
            </Col>
            <Col span={3} offset={8}>
                <Venda />
            </Col>
        </Row>
        </>
    );
};

export default Inicio;