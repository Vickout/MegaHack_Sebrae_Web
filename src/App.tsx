import { Layout } from "antd";
import React, { useState } from "react";
import Auth from "./auth";
import HeaderSystem from "./pages/HeaderSystem";
import MenuSystem from "./pages/MenuSystem/MenuSystem";
import Routes from "./routes";

const { Header, Content, Sider } = Layout;

const auth = new Auth();

export default function App({history}: any) {

  const [state, setState] = useState(false);

  const onCollapse = (collapsed: any) => {
    setState(collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header><HeaderSystem /></Header>
        <Layout className="site-layout">
          <Sider collapsible={auth.isAuthenticated()} collapsed={state} 
            onCollapse={onCollapse} >
            { auth.isAuthenticated() ? <MenuSystem /> : null}
          </Sider>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Routes />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
