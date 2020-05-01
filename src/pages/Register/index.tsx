import { Button, Card, Form, Input, Select } from 'antd';
import React from 'react';
import './styles.css';

export default function Register({history}: any) {

    const [form] = Form.useForm();

    const formLayout = 'vertical';

    const formItemLayout = {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = () => {
        history.push('/');
    };

    return (
        <Card title="Registro de usuários" className="card">
            <Form
                onFinish={onFinish}
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
            >
                <Form.Item 
                    label="Nome completo"
                    name="nome"
                    rules={[{ required: true, message: 'Nome completo é obrigatório' }]} >
                    <Input />
                </Form.Item>
                <Form.Item 
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Email é obrigatório' }]} >
                    <Input />
                </Form.Item>
                <Form.Item 
                    label="Estado"
                    name="estado"
                    rules={[{ required: true, message: 'Estado é obrigatório' }]} >
                    <Select>
                        <Select.Option value="MG">Minas Gerais</Select.Option>
                        <Select.Option value="SP">São Paulo</Select.Option>
                        <Select.Option value="RJ">Rio de Janeiro</Select.Option>
                        <Select.Option value="ES">Espirito Santo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item 
                    label="Cidade"
                    name="Cidade"
                    rules={[{ required: true, message: 'Cidade é obrigatório' }]} >
                    <Select>
                        <Select.Option value="BH">Belo Horizonte</Select.Option>
                        <Select.Option value="SP">São Paulo</Select.Option>
                        <Select.Option value="RJ">Rio de Janeiro</Select.Option>
                        <Select.Option value="VI">Vitória</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Senha"
                    name="password"
                    rules={[{ required: true, message: 'Senha é obrigatória !' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirma a senha"
                    name="password"
                    rules={[{ required: true, message: 'Confirmação de senha obrigatória !' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Registrar</Button>
                    <Button htmlType="button" onClick={onReset}>Limpar</Button>
                </Form.Item>
            </Form>
        </Card>
    );
}