import React from "react";

const OutputWindow = ({ outputDetails, title }) => {
  
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500" style={{fontSize: '11px'}}>
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500" style={{fontSize: '11px'}}>
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails?.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stdout)}
        </pre>
      );
    }
  };
  return (
    <>
      <h1 style={{fontWeight: 'semi-bold', marginBottom: '10px', fontSize: '13px'}}>
        {title}:
      </h1>
      <div 
        style={{
          backgroundColor: '#1e293b', 
          minWidth: '200px',
          maxWidth: '200px',
          height: '140px', 
          borderRadius: '10px', 
          color: "#fff", 
          fontSize: '12px',
          padding: '10px',
          overflowY: 'auto'
        }}
      >
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </>
  );
};

export default OutputWindow;