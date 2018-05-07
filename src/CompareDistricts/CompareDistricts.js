import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import ComparisonCard from './../ComparisonCard/ComparisonCard';
import './CompareDistricts.css';

const CompareDistricts = props => {
  const firstCard = (props.selectedDistricts[0] &&
    <DistrictCard
      districtData={props.selectedDistricts[0]}
      handleSelect={props.handleSelect}
      comparisonCard={props.comparisonCard}
    />
  );
  const comparisonCard = (
    typeof props.selectedDistricts[0] === 'object'
    && typeof props.selectedDistricts[1] === 'object'
    && <ComparisonCard
      selectedDistricts={props.selectedDistricts}
      comparisonData={props.comparisonData}
    />
  );
  const secondCard = (props.selectedDistricts[1] &&
    <DistrictCard
      districtData={props.selectedDistricts[1]}
      handleSelect={props.handleSelect}
      comparisonCard={props.comparisonCard}
    />
  );

  return (
    <div className='districts-compare'>
      {firstCard}
      {comparisonCard}
      {secondCard}
    </div>
  );
};

export default CompareDistricts;


