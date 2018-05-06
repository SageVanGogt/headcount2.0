import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import './DistrictsContainer.css';
import PropTypes from 'prop-types';

const DistrictsContainer = ({districts, handleSelect, selectedDistricts, comparisionCard}) => {
  const allDistrictCards = Object.keys(districts).map((district, index) => {
    const selectedClass = selectedDistricts.includes(d => {
      // console.log('d-location', d.location)
      // console.log('districts[district]', districts[district].location)
      return d.location === districts[district].location
    }) ?
      'district-card selected' : 'district-card';
    // console.log(selectedClass);
    return (
      <DistrictCard
        selectedClass={selectedClass}
        key={`district${index}`}
        districtData={districts[district]}
        handleSelect={handleSelect}
        // comparisionCard={comparisionCard}
      />
    );
  });

  return (
    <div className="district-container">
      {allDistrictCards}
    </div>
  );
};

DistrictsContainer.propTypes = {
  districts: PropTypes.objectOf(PropTypes.object)
};

export default DistrictsContainer;