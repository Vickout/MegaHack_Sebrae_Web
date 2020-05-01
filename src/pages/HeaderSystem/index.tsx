import { DownOutlined, LogoutOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Avatar, Col, Dropdown, Form, Input, Menu, Row, Badge, Button, Popconfirm } from 'antd';
import React from 'react';
import Auth from '../../auth';
import './styles.css';

const auth = new Auth();

const HeaderSystem = () => {
    const [form] = Form.useForm();
    const formLayout = 'vertical';
    
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              Mensagem de João
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Mensagem de Gustavo
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Mensagem de Helena
            </a>
          </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Row gutter={16}>
                <Col span={3}>
                    <div className="nomeSistema">Consilio</div>
                </Col>
                { auth.isAuthenticated() ?
                <>
                <Col span={6}>
                    <Form
                        form={form}
                        initialValues={{ layout: formLayout }}
                    >
                        <Form.Item 
                            name="pesquisa"
                            className="input"
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={3}>
                    <Avatar className="avatar" icon={<UserOutlined />} />
                </Col>
                <Col span={1}>
                    <div className="nomeUsuario">Guilherme Lopes</div>
                </Col>
                <Col span={10}>
                    <div className="icone">
                        <Dropdown overlay={menu}>
                            <Badge count={5}>
                                <DownOutlined />
                            </Badge>
                        </Dropdown>
                    </div>
                </Col>
                <Col span={1}>
                <Popconfirm title="Deseja sair do sistema ?" okText={'Sim'} cancelText={'Não'}
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                        <Button type="link" icon={<LogoutOutlined />} size={'large'} />
                </Popconfirm>
                </Col>
                </>
                : null }
            </Row>
        </>
    );
}

export default HeaderSystem;