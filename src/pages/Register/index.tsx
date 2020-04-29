import React from 'react';
import './styles.css';

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';

export default function Register() {

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

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


    return (
        <div>
            <Form
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
                label="Data de nascimento"
                name="nascimento"
                rules={[{ required: true, message: 'Data de nascimento é obrigatório' }]} >
                <DatePicker format={dateFormatList} />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">Logar</Button>
                <Button htmlType="button" onClick={onReset}>Limpar</Button>
            </Form.Item>
        </Form>
        </div>
    );
}