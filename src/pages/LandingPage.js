import React from 'react'
import { Row, Col, Typography, Space, Button } from 'antd';
import LandingSVG from '../assets/astronaut.svg';

const { Title, Text } = Typography;

const LandingPage = () => {
    return (
        <div style={{width:"100vw"}} >
            <Row align='middle' style={{height: "100vh"}} >
                <Col xs={0} sm={2}></Col>
                <Col xs={24} sm={12}>
                    <img src={LandingSVG} alt="Landing" style={{padding: 10, maxWidth: "100%"}} />
                </Col>
                <Col xs={24} sm={10} style={{padding: 30}} >
                    <Space direction="vertical" style={{width: "80%"}} >
                        <Title>Star Launch</Title>
                        <Text style={{fontSize:"1.2rem"}} strong>Star Launch app is built with React and Ant Design components library. It is based on <strong>SpaceX API</strong>(<a target="_blank" rel="noreferrer" href="https://github.com/r-spacex/SpaceX-API" > SpaceX REST API </a>). You may find the source code here: <a target="_blank" rel="noreferrer" href="https://github.com/OhDylan/star-launch" >Github - Star Launch</a>. Please contact me if any issue is found, or raise a ticket in the Github repository.</Text>
                        <Button size='large' href='/launch'style={{width:150, height: "auto", paddingTop: 10, fontSize: "1.2rem", fontWeight: "bolder", margin: "10px 0", backgroundColor: "rgb(255, 50, 30)", color: "white", borderRadius: "10px", border: "none"}} >Launch Pad</Button>
                        <Button size='large' href='/starlink'style={{width:150, height: "auto", verticalAlign: "middle", fontSize: "1.2rem", fontWeight: "bolder", margin: "10px 0", backgroundColor: "rgb(50, 26, 255)", color: "white", borderRadius: "10px", border: "none"}} >Star Link</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default LandingPage;