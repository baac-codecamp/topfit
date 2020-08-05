import React, { Component } from 'react'
import logo from './logo.svg';
import Routing from './routes'
// import './App.css';
// import './pages/Login/node_modules/antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu, Breadcrumb  } from 'antd';
import {
  UserOutlined, LaptopOutlined, NotificationOutlined
} from '@ant-design/icons';
import { NavLink,Link,Route } from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


// function App() {
  
//   return (
//     <Layout>
//     <Header className="header">
//       <div className="logo" />
//       <Menu theme="dark" style={{ textAlign: "right" }} mode="horizontal" defaultSelectedKeys={['2']}>
//         <Menu.Item key="1">Logout</Menu.Item>
//         <Menu.Item key="2">nav 2</Menu.Item>
//       </Menu>
//     </Header>
//     <Layout>
//       <Sider width={200} className="site-layout-background">
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           style={{ height: '100%', borderRight: 0 }}
//         >
//           <Menu.Item key="1" icon={<LaptopOutlined />}>
//               Homepage
//             </Menu.Item>
//           <Menu.Item key="2" icon={<LaptopOutlined />} >
//               Diet plan
//           </Menu.Item>
//           <Menu.Item key="3" icon={<NotificationOutlined />} >
//               Blog
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout style={{ padding: '0 24px 24px' }}>
//         <Breadcrumb style={{ margin: '16px 0' }}>
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: 24,
//             margin: 0,
//             minHeight: 280,
//           }}
//         >
//           Content
//           <Link to="/Login">Login</Link>
//         </Content>
//       </Layout>
//     </Layout>
//   </Layout>
//   );
// }

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
class App extends Component {
  render() {
    return (
      // <div className="App container">
      //   <Route path="/" component={Home} />
      //   <Route path="/login" component={About} />
      //   <Route path="/posts" component={Post} />
      //   <Route path="/projects" component={Project} />
      // </div>
    // <Layout>
    // <Header className="header">
    //   <div className="logo" />
    //   <Menu theme="dark" style={{ textAlign: "right" }} mode="horizontal" defaultSelectedKeys={['2']}>
    //     <Menu.Item key="1">Logout</Menu.Item>
    //     <Menu.Item key="2">nav 2</Menu.Item>
    //   </Menu>
    // </Header>
    // <Layout>
    //   <Sider width={200} className="site-layout-background">
    //     <Menu
    //       mode="inline"
    //       defaultSelectedKeys={['1']}
    //       defaultOpenKeys={['sub1']}
    //       style={{ height: '100%', borderRight: 0 }}
    //     >
    //       <Menu.Item containerElement={<Link to="/" />} key="1" icon={<LaptopOutlined />} >
    //           Homepage
    //         </Menu.Item>
    //       <Menu.Item key="2" icon={<LaptopOutlined />} >
    //           Diet plan
    //       </Menu.Item>
    //       <Menu.Item key="3" icon={<NotificationOutlined />} >
    //           Blog
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    //   <Layout style={{ padding: '0 24px 24px' }}>
    //     <Breadcrumb style={{ margin: '16px 0' }}>
    //       <Breadcrumb.Item>Home</Breadcrumb.Item>
    //       <Breadcrumb.Item>List</Breadcrumb.Item>
    //       <Breadcrumb.Item>App</Breadcrumb.Item>
    //     </Breadcrumb>
    //     <Content
    //       className="site-layout-background"
    //       style={{
    //         padding: 24,
    //         margin: 0,
    //         minHeight: 280,
    //       }}
    //     >
    //       Content
    //     </Content>
    //   </Layout>
    // </Layout>

    // <Routing />

  //</Layout>
  
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src={'/topfitlogo.png'} alt="Topfit LOGO" width="20" height="20" />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Login</NavLink>
                <NavLink to="/signup" activeClassName="is-active" className="navbar-item">Signup</NavLink>
                <NavLink to="/home" activeClassName="is-active" className="navbar-item">Home</NavLink>
                
                {/* <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
                <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>
                <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
                <a className="navbar-item" href="https://github.com/phonbopit" target="_blank">Star on <i className="fab fa-github"></i></a> */}
              </div>
            </div>
          </div>
        </nav>

        <Routing />
      </div>
      
    )
  }
}


export default App;
