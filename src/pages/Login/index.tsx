import { Button, Card, Form, Input } from 'antd';
import React from 'react';
import './styles.css';

export default function Login({history}: any) {

    const [form] = Form.useForm();

    const formLayout = 'vertical';

    const formItemLayout = {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
    };

    const onFinish = () => {
      localStorage.setItem('logado', JSON.stringify(true));
      history.push('/calendario');
    };

    return (
      <>
        <Card title="Formulário de login" style={{ width: '100%' }}>
          <Form
            onFinish={onFinish}
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{ layout: formLayout }}
          >
          <Form.Item 
            label="Login"
            name="username"
            rules={[{ required: true, message: 'Login é obrigatório' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: 'Senha é obrigatória !' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <div>
              <Button type="primary" block htmlType="submit">Login</Button>
            </div>
          </Form.Item>
          <Form.Item>
            <div>
              <Button type="primary" block>Login with Facebook</Button>
            </div>
          </Form.Item>
          <Form.Item>
            <div>
              <Button type="primary" danger block>Login with Google +</Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}
