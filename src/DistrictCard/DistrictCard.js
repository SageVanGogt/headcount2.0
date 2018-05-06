import React, { Component } from 'react';
import './DistrictCard.css';

class DistrictCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: false
    };
    // this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass () {
    const currentState = this.state.selected;
    this.setState({
      selected: !currentState
    });
  };

  render () {
    const individualDistrict = Object.keys(this.props.districtData.data);
    const districtAnnualData = individualDistrict.map((annualData, index) => {
      const data = this.props.districtData.data[annualData];
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
        // className="district-card"
        className={this.state.selected ? 'district-card selected' : 'district-card'}
        onClick={() => {
          this.props.handleSelect(this.props.districtData.location);
          this.toggleClass();
        }}
      >
        <section className="district-card-header">
          <h2 className="district-name">{this.props.districtData.location}</h2>
        </section>
        <section className="district-card-body">
          <h3>Yearly Progress</h3>
          <ul className="district-data">
            {districtAnnualData}
          </ul>
        </section>
      </article>
    );
  }
}

export default DistrictCard;