import { Layout } from 'antd';
import "antd/dist/antd.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FooterSystem from './pages/FooterSystem';
import HeaderSystem from './pages/HeaderSystem';
import SiderSystem from './pages/SiderSystem';

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
  <div>
  <Layout>
      <Header><HeaderSystem /></Header>
      <Layout>
        <Sider><SiderSystem /></Sider>
        <Content><App /></Content>
      </Layout>
      <Footer><FooterSystem /></Footer>
    </Layout>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

