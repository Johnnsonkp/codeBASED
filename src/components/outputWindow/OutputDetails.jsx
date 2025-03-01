import React from "react";

const OutputDetails = ({ outputDetails, title }) => {
  return (
    <div 
      style={{
        border: `1px solid ${outputDetails?.status?.description == 'Accepted'? "lightgreen" : "red"}`, 
        marginTop: '5px', borderRadius: '5px', padding: '2px'}}
      className="metrics-container mt-4 flex flex-col space-y-3">
      <h5 style={{marginBottom: '0px', marginTop: '0px'}}>{title}:</h5>
      <p
        style={{fontSize: '12px'}} 
        className="text-sm">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p 
        style={{fontSize: '12px'}} 
        className="text-sm"
      >
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.memory}
        </span>
      </p>
      <p
        style={{fontSize: '12px'}} 
        className="text-sm"
      >
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;