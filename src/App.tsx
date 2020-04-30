import { Layout } from "antd";
import React, { useState } from "react";
import MenuSystem from "./pages/MenuSystem/MenuSystem";
import Routes from "./routes";
import HeaderSystem from "./pages/HeaderSystem";

const { Header, Content, Sider } = Layout;

const App = () => {

  const [state, setState] = useState(false);

  const onCollapse = (collapsed: any) => {
    setState(collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header><HeaderSystem /></Header>
        <Layout className="site-layout">
        <Sider collapsible collapsed={state} onCollapse={onCollapse}>
          <MenuSystem />
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

export default App;