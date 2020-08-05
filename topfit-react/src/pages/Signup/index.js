import React, { createElement, useState } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';
import { Input } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

function Signup() {
    return (
        <Layout>
<Content >
                <Row style={{ height: 600 }} justify="center">
                    <Col>
                        <Row  justify="center" style={{paddingTop:40}}>
                        <img className="MyAvatar" style={{ width: 150, height: 150 }}
              src="topfitlogo.png" />
                        </Row>
                        <Row>
                            <span>Username :</span>
                        </Row>
                        <Row>
                             <Input size="large" style={{ width: 400 }} placeholder="Username"></Input>
                        </Row>
                        <Row>
                            <span>Password : </span>
                        </Row>
                        <Row>
                             <Input size="large" style={{ width: 400 }} type="password" placeholder="Password"></Input>
                        </Row>
                        <Row>
                            <span>Confirm password :</span>
                        </Row>
                        <Row>
                             <Input size="large" style={{ width: 400 }} type="password" placeholder="Confirm password"></Input>
                        </Row>
                        <Row>
                            <span>Name :</span>
                        </Row>
                        <Row>
                             <Input size="large" style={{ width: 400 }} placeholder="Name"></Input>
                        </Row> 
                        <Row style={{paddingTop:10}} justify="center">
                            <Button type="primary" >Sign up</Button>
                            {/* <Router><Link to="./Login">Loginaaaa</Link></Router> */}
                            
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
  
    );
  
 
  }
  
  
  export default Signup;
  