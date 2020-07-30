import React from 'react';
import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu, Breadcrumb  } from 'antd';
import {
  UserOutlined, LaptopOutlined, NotificationOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" style={{ textAlign: "right" }} mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" > Logout</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<LaptopOutlined />}>
              Homepage
            </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />} >
              Diet plan
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />} >
              Blog
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}


export default App;
