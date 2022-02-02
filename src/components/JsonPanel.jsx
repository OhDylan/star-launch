import React from 'react';

const JsonPanel = ({children}) => {
  return (
    <div style={{padding: 20, width: "100%", height: "65vh", overflow: "scroll", backgroundColor: "black", color: "white"}}>
      {children}
    </div>
  )
};

export default JsonPanel;
