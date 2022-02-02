import React from 'react';
import {Button} from 'antd';

const NavigateButton = ({navigate, color, text}) => {
  return (
    <Button href={navigate} style={{position: "absolute", right:"20px", bottom: "10px", padding: 10, height: 30, borderRadius: 10, fontWeight: "bold", fontFamily: "Roboto", backgroundColor: color, color: 'white'}} >{text}</Button>
  );
};

export default NavigateButton;
