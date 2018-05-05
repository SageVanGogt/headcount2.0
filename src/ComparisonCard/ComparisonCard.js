import React from 'react';
import './ComparisonCard.css';

const ComparisonCard = ({comparisionData}) => {
  let data = Object.keys(comparisionData).map((item, index) => {
    return (
      <h2 key={`compare-card${index}`}>{item} : {comparisionData[item]}</h2>
    );
  });
  return (
    <div className="comparison-card">
      {data}
    </div>
  );
};

export default ComparisonCard;