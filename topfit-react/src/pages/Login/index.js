import React, { createElement, useState } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import { blue } from '@ant-design/colors';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom'
import Routing from './'
const { Header, Footer, Sider, Content } = Layout;


function Login() {
   return(
   <Layout>
      <Content >
                <Row style={{ height: 600 }} align="middle">
                    <Col span={13} push={11} align="start" >
                        <Row style={{paddingLeft:15}}>
                            <span>Username</span>
                        </Row>
                        <Row style={{paddingLeft:15}}>
                             <Input size="large" style={{ width: 400 }} placeholder="Username"></Input>
                        </Row>
                        <Row style={{paddingLeft:15}}>
                            <span>Password</span>
                        </Row>
                        <Row style={{paddingLeft:15}}>
                             <Input size="large" style={{ width: 400 }} placeholder="Password"></Input>
                        </Row>  
                        <Row style={{paddingLeft:15,paddingTop:15}}>
                            <Col span={3}><Button type="default" >Sign up</Button></Col> 
                            <Col span={3}><Button type="primary" >Login</Button></Col>
                            
                        </Row>
                    </Col>
                    <Col span={11} pull={13} align="end">
                    <img className="MyAvatar" style={{ width: 400, height: 400 }}
              src="topfitlogo.png" />
                    </Col>
                </Row>
            </Content>
        </Layout>);
  }
  
  
  export default Login;
  