import { Breadcrumb, Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import MenuSystem from "./pages/MenuSystem/MenuSystem";

import {
  DesktopOutlined,
  FileOutlined, PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { ClickParam } from 'antd/lib/menu';

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

class SiderPrincipal extends Component {
  
  constructor( props: { collapsed: boolean; } ){
    super(props);
    this.state = { ...props };
  }
  
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <MenuSystem />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content>
              <Breadcrumb>
                <Breadcrumb.Item>Página inicial</Breadcrumb.Item>
                <Breadcrumb.Item>Pagina atual</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <App />
              </div>
            </Content>
            <Footer>2020</Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}

ReactDOM.render(<SiderPrincipal />, document.getElementById('root'));