import React, { useState } from "react";
import "./App.css";
import TodoTable from "./TodoTable";
import { Layout, Menu, Icon } from "antd";
const { Content, Header, Sider } = Layout;

function App() {
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ backgroundColor: "#40a9ff6b" }}>
          <div className="header-title">备忘录</div>
        </Header>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item
                key="1"
                onClick={() => {
                  setCompleted(false);
                }}
              >
                <Icon type="pie-chart" />
                <span>待完成</span>
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => {
                  setCompleted(true);
                }}
              >
                <Icon type="desktop" />
                <span>已完成</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <TodoTable completed={completed} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
