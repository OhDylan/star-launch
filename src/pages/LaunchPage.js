import React, { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import SearchBar from '../components/SearchBar';
import JsonPanel from '../components/JsonPanel';
import { getAllFailedLaunches, getAllFailedLaunchesDetails } from '../utils/library';
import NavigateButton from '../components/NavigateButton';


const { Title } = Typography;

const LaunchPage = () => {
  const [query, setQuery] = useState("");
  const [launchPad, setLaunchPad] = useState("");
  const [results, setResults] = useState({});
  const [notFoundMessage, setNotFoundMessage] = useState("");

  useEffect(() => {
    if(query !== "") {
      getAllFailedLaunches(query)
      .then((launchPadData) => {
        if(Object.keys(launchPadData).length !== 0){
          setLaunchPad(launchPadData?.name)
          if(launchPadData?.launch_attempts !== launchPadData?.launch_successes){
            setNotFoundMessage("")
            getAllFailedLaunchesDetails(launchPadData?.launches)
            .then(data => {
              let json = {
                "launchpad": "",
                "all_failures": []
              }
              json["launchpad"] = launchPad
              data.forEach((launch => {
                if(!launch?.success){
                  let jsonFailure = {}
                  jsonFailure["name"] = launch?.name
                  jsonFailure["failures"] = launch?.failures.map(failure => failure?.reason)
                  json.all_failures.push(jsonFailure)
                }
              }))
              setResults(json)
            })
          }
          else{
            setResults({})
            setNotFoundMessage("No failure was found for this Launch Pad.")
          }
        }
        else{
          setResults({})
          setNotFoundMessage("Launch Pad id not found.")
        }
      })
    }
  }, [launchPad, query])



  return (
    <div style={{overflow: "hidden"}}>
      <Row style={{marginTop: 10}}>
        <Col xs={0} sm={8} ></Col>
        <Col  justify='center' xs={24} sm={{span: 8, offset: 3}}><Title>Launch Pad</Title></Col>
        <Col xs={0} sm={8}></Col>
      </Row>
      <Row justify='center' style={{marginTop: 10, marginBottom: 30}} >
        <Col xs={0} sm={4} ></Col>
        <Col xs={24} sm={{span:16, offset: 2}} >
          <SearchBar query={query} setQuery={setQuery} />
        </Col>
        <Col xs={0} sm={4}></Col>
      </Row>
      <Row justify='center' style={{marginTop: 10, marginBottom: 30}} >
        <Col xs={2} sm={4} ></Col>
        <Col xs={20} sm={16} >
          <JsonPanel>
            {Object.keys(results).length === 0 ? "" : <pre>{JSON.stringify(results, null, 2)}</pre>}
            {notFoundMessage !== "" ? <pre>{notFoundMessage}</pre> : ""}
          </JsonPanel>
        </Col>
        <Col xs={2} sm={4}></Col>
      </Row>
      <NavigateButton navigate="./starlink" color="rgb(50, 26, 255)" text="To Star Link" />
    </div>
  );
};

export default LaunchPage;
