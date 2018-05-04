import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import './CompareDistricts.css'

const CompareDistricts = (props) => {
  const firstCard =  (props.selectedDistricts[0] &&
    <DistrictCard 
      districtData={props.selectedDistricts[0]} 
      handleSelect={props.handleSelect}
    />
  )
  const secondCard =  (props.selectedDistricts[1] &&
    <DistrictCard 
      districtData={props.selectedDistricts[1]}
      handleSelect={props.handleSelect} 
    />
  )

  return (
    <div className='districts-compare'>
      {firstCard}
      {secondCard}
    </div>
  )
}


export default CompareDistricts


