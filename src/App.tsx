import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import MenuSystem from "./pages/MenuSystem/MenuSystem";
import Routes from "./routes";
import HeaderSystem from "./pages/HeaderSystem";

const { Header, Content, Sider } = Layout;

export default function App({history}: any) {

  const [state, setState] = useState(false);
  const [visible, setVisible] = useState(false);

  const [usuarioLogado, setUsuarioLogado] = useState(localStorage.getItem('logado'));

  useEffect(
    () => {
      if(usuarioLogado) {
        setVisible(true)
      }
    }, [usuarioLogado]
  );

  const onCollapse = (collapsed: any) => {
    setState(collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header><HeaderSystem /></Header>
        <Layout className="site-layout">
          <Sider collapsible={visible} collapsed={state} onCollapse={onCollapse} >
            { visible ? <MenuSystem /> : null}
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
