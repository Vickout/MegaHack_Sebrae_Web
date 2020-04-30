import { Breadcrumb, Layout } from "antd";
import React, { useState } from "react";
import MenuSystem from "./pages/MenuSystem/MenuSystem";
import Routes from "./routes";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {

  const [state, setState] = useState(false);

  const onCollapse = (collapsed: any) => {
    setState(collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={state} onCollapse={onCollapse}>
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
              <Routes />
            </div>
          </Content>
          <Footer>2020</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default App;