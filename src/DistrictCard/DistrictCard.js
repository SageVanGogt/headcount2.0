import React from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types'

const DistrictCard = props => {
  const individualDistrict = Object.keys(props.districtData.data);
  const districtAnnualData = individualDistrict.map((annualData, index) => {
    const data = props.districtData.data[annualData];
    return (
      <li
        style={{
          color: data > .5 ? '#649454' : '#9e0c09'
        }}
        key={`card${index}`}
      >
        {annualData} : {data}
      </li>
    );
  });

  return (
    <article
      className={props.comparisonCard ? 'district-card selected' : props.selectedClass}
      onClick={() => {
        props.handleSelect(props.districtData.location);
      }}
    >
      <section className="district-card-header">
        <h2 className="district-name">{props.districtData.location}</h2>
      </section>
      <section className="district-card-body">
        <h3>Yearly Progress</h3>
        <ul className="district-data">
          {districtAnnualData}
        </ul>
      </section>
    </article>
  );
};

DistrictCard.propTypes = {
  districtData: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
  selectedClass: PropTypes.string.isRequired
}

export default DistrictCard;