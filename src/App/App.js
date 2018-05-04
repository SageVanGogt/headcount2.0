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
      selectedDistricts: [null, null],
      firstSelectedDistrict: null,
      secondSelectedDistrict: null
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
    this.setState({districts});
  };

  handleSelect = (district) => {
    const districtObj = allDistricts.findByName(district);
    districtObj.selected = !districtObj.selected;
    let firstSelectedDistrict = this.state.firstSelectedDistrict || null;
    let secondSelectedDistrict = this.state.secondSelectedDistrict || null;
    
    // if(this.state.selectedDistricts[0] && this.state.selectedDistricts[0].selected) {
    //   firstSelectedDistrict = null;
    // } else if(this.state.selectedDistricts[1] && this.state.selectedDistricts[0].selected) {
    //   secondSelectedDistrict = null;
    // }

    //if card is selected, and it is already
    //this selected array, remove that card object
    //from the selected cardsarray

    if(this.state.selectedDistricts[0] === null) {
      firstSelectedDistrict = districtObj;
    } else if(this.state.selectedDistricts[1] === null) {
      secondSelectedDistrict = districtObj;
    }

    this.setState({
      selectedDistricts: [firstSelectedDistrict, secondSelectedDistrict],
      firstSelectedDistrict,
      secondSelectedDistrict
    })
  }

  render () {
    return (
      <div className='app'>
        <Search
          handleSearchEvent={this.handleSearchEvent}
        />
        <CompareDistricts 
          selectedDistricts={this.state.selectedDistricts}
          handleSelect={this.handleSelect}
        />
        {
          this.state.districts &&
          <DistrictsContainer
            districts={this.state.districts}
            handleSelect={this.handleSelect}
          />
        }
      </div>
    );
  }
}

export default App;
