import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './../helper';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictsContainer from './../DistrictsContainer/DistrictsContainer';
import Search from './../Search/Search';
import CompareDistricts from './../CompareDistricts/CompareDistricts';

const allDistricts = new DistrictRepository(kinderData);

class App extends Component {
  constructor () {
    super();

    this.state = {
      districts: '',
      selectedDistricts: [],
      comparedDistricts: {}
    };
  }

  componentDidMount () {
    const districts = allDistricts.stats;
    this.setState({districts});
  }

  handleSearchEvent = (event) => {
    event.preventDefault();
    const {value} = event.target;
    const districts = allDistricts.findAllMatches(value);

    if (value === '') {
      this.setState({districts: allDistricts.stats});
    } else {
      this.setState({districts});
    }
  };

  handleSelect = (district) => {
    const districtObj = allDistricts.findByName(district);
    const firstSelectedDistrict = this.state.selectedDistricts[0] || null;
    const secondSelectedDistrict = this.state.selectedDistricts[1] || null;
    const selectedDistricts = [firstSelectedDistrict, secondSelectedDistrict];

    if (districtObj.selected) {
      const selectedCardIndex = selectedDistricts.indexOf(districtObj);
      selectedDistricts.splice(selectedCardIndex, 1, null);
    } else {
      const insertIndex = selectedDistricts.indexOf(null);
      selectedDistricts.splice(insertIndex, 1, districtObj);
    }
    districtObj.selected = !districtObj.selected;
    this.compareDistricts(selectedDistricts);

    this.setState({
      selectedDistricts
    });
  };

  compareDistricts = (districts) => {
    if (districts[0] && districts[1]) {
      let district1 = districts[0].location;
      let district2 = districts[1].location;
      const comparedDistricts = allDistricts.compareDistrictAverages(district1, district2);
      this.setState({
        comparedDistricts
      });
    }
    else {
      this.setState({
        comparedDistricts: {}
      });
    }
  };

  render () {
    return (
      <div className='app'>
        <Search
          handleSearchEvent={this.handleSearchEvent}
        />
        <CompareDistricts
          selectedDistricts={this.state.selectedDistricts}
          handleSelect={this.handleSelect}
          comparisonData={this.state.comparedDistricts}
          comparisonCard={true}
        />
        {
          this.state.districts &&
          <DistrictsContainer
            districts={this.state.districts}
            handleSelect={this.handleSelect}
            selectedDistricts={this.state.selectedDistricts}
            comparisonCard={false}
          />
        }
      </div>
    );
  }
}

export default App;