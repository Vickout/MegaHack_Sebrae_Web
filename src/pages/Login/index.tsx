import { Button, Card, Form, Input } from 'antd';
import React from 'react';
import './styles.css';

export default function Login() {

    const [form] = Form.useForm();

    const formLayout = 'vertical';

    const formItemLayout = {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
      <Card title="Formulário de login" style={{ width: '100%' }}>
        <Form
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">Logar</Button>
          <Button htmlType="button" onClick={onReset}>Limpar</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}