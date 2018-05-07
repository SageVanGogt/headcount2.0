import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import './DistrictsContainer.css';
import PropTypes from 'prop-types';

const DistrictsContainer = ({districts, handleSelect, selectedDistricts, comparisionCard}) => {
  const allDistrictCards = Object.keys(districts).map((district, index) => {
    const selectedClass = selectedDistricts.includes(districts[district]) ? 'district-card selected' : 'district-card';

    return (
      <DistrictCard
        selectedClass={selectedClass}
        key={`district${index}`}
        districtData={districts[district]}
        handleSelect={handleSelect}
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