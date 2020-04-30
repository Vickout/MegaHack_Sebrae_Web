import {
  DesktopOutlined,
  FileOutlined, PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const { SubMenu } = Menu;

export default function MenuSystem() {

  return (
    <>
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to='register'> Registro </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to='calendario'> Calendário </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          <Link to=''> Login </Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="4">Tom</Menu.Item>
          <Menu.Item key="5">Bill</Menu.Item>
          <Menu.Item key="6">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="7">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />} />
      </Menu>
    </>
  );
}