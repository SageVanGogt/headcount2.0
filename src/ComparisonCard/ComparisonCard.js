import React from 'react';
import './ComparisonCard.css';

const ComparisonCard = ({comparisonData}) => {
  let data = Object.keys(comparisonData).map((item, index) => {
    return (
      <h2 key={`compare-card${index}`}>{item} : {comparisonData[item]}</h2>
    );
  });
  return (
    <div className="comparison-card">
      {data}
    </div>
  );
};

export default ComparisonCard;