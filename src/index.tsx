import { Layout } from 'antd';
import "antd/dist/antd.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HeaderSystem from './pages/HeaderSystem';
import SiderSystem from './pages/SiderSystem';

const { Header, Sider, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
  <div>
  <Layout>
    <Header><HeaderSystem /></Header>
      <Layout>
        <Sider><SiderSystem /></Sider>
        <Content><App /></Content>
      </Layout>
      </Layout>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

