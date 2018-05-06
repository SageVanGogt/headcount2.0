import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import ComparisonCard from './../ComparisonCard/ComparisonCard';
import './CompareDistricts.css';

const CompareDistricts = props => {
  const firstCard = (props.selectedDistricts[0] &&
    <DistrictCard
      districtData={props.selectedDistricts[0]}
      handleSelect={props.handleSelect}
    />
  );

  const comparisonCard = (
    props.selectedDistricts[0] !== null
    && props.selectedDistricts[1] !== null
    && <ComparisonCard
      selectedDistricts={props.selectedDistricts}
      comparisionData={props.comparisionData}
    />
  );
  const secondCard = (props.selectedDistricts[1] &&
    <DistrictCard
      districtData={props.selectedDistricts[1]}
      handleSelect={props.handleSelect}
      selectedClass={props.selectedClass}
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


