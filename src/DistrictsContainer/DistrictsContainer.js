import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import './DistrictsContainer.css';
import PropTypes from 'prop-types';

const DistrictsContainer = ({districts, handleSelect, selectedDistricts}) => {
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
  districts: PropTypes.objectOf(PropTypes.object.isRequired),
  comparisonCard: PropTypes.bool.isRequired,
  selectedDistricts: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default DistrictsContainer;