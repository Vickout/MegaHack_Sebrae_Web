import React from 'react';
import './styles.css';
import { Form, Input, Button, Checkbox } from 'antd';

export default function Login() {

    const layout = {
        labelCol: { span: 0 },
        wrapperCol: { span: 16 },
    };
    
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form {...layout}
            title="Tela de login"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Login"
                name="username"
                rules={[{ required: true, message: 'Deve informar o login !' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Senha"
                name="password"
                rules={[{ required: true, message: 'Deve informar a senha !' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Logar
                </Button>
            </Form.Item>
        </Form>
      );
}