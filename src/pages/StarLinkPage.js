import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, DatePicker, Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons/lib/icons';
import { getAllSatellites, filterByDate } from '../utils/library';
import JsonPanel from '../components/JsonPanel';
import NavigateButton from '../components/NavigateButton';

const { Title } = Typography;

const StarLinkPage = () => {

  const [satelliteData, setSatteliteData] = useState([]);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(satelliteData.length);

  // useEffect(() => {
  //   getAllSatellites()
  //   .then(data => {
  //     setSatteliteData(data)
  //     setCount(satelliteData.length)
  //   })
  // }, [])

  const dateSelected = (moment, dateString) => {
    getAllSatellites()
    .then(data => {
      const filteredSatellites = filterByDate(data, dateString)
      setSatteliteData(filteredSatellites)
      setCount(filteredSatellites.length)
    })
  }

  const toggleFilter = (e) => {
    setFilter(e.target.innerText.toLowerCase())
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={toggleFilter} >Date</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={toggleFilter} >Month</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={toggleFilter} >Year</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{overflow: "hidden"}}>
      <Row style={{marginTop: 10}}>
        <Col xs={2} sm={8} ></Col>
        <Col justify='center' xs={20} sm={{span: 8, offset: 3}}><Title>Star Link</Title></Col>
        <Col xs={2} sm={8}></Col>
      </Row>
      <Row justify='center' style={{marginTop: 10, marginBottom: 30}} >
        <Col xs={2} sm={4} ></Col>
        <Col xs={20} sm={{span:16, offset: 12}} >
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{marginRight: 10, fontWeight: "bold"}} >
            Filter By <DownOutlined />
          </a>
        </Dropdown>
          <DatePicker onChange={dateSelected} picker={filter} style={{width: "20%"}}/>
        </Col>
        <Col xs={2} sm={4}></Col>
      </Row>
      <Row style={{marginTop: 10}}>
        <Col xs={2} sm={8} ></Col>
        <Col  justify='center' xs={20} sm={{span: 8, offset: 3}}><Title level={4}>Satellites Found: <span style={{color: "green", fontWeight: "bold"}}>{count}</span></Title></Col>
        <Col xs={2} sm={8}></Col>
      </Row>
      <Row justify='center' style={{marginTop: 10, marginBottom: 30}} >
        <Col xs={2} sm={4} ></Col>
        <Col xs={20} sm={16} >
          <JsonPanel>
            {satelliteData?.length === 0 ? "" : <pre>{JSON.stringify(satelliteData, null, 2)}</pre>}
          </JsonPanel>
        </Col>
        <Col xs={2} sm={4}></Col>
      </Row>
      <NavigateButton navigate="./launch" color="rgb(255, 50, 30)" text="To Launch Pad" />
    </div>
  )
};

export default StarLinkPage;
