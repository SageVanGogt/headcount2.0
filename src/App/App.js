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
    this.setState({districts});
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
    // }, this.removeSelected(selectedDistricts));

    // this.removeSelected();
  };

  // removeSelected = (selectedDistricts) => {
  //   const districtKeys = Object.keys(this.state.districts);
  //   const currSelectedDistricts = districtKeys.reduce((foundDistricts, district) => {
  //     if (this.state.districts[district].selected) {
  //       foundDistricts.push(this.state.districts[district]);
  //     }
  //     return foundDistricts;
  //   }, []);
  //   // if currSelectedDistricts not found in selectedDistricts
  //     // remove state.selected
  //   const notSelectedDistricts = currSelectedDistricts.filter(currDistrict => {
  //     return !this.state.selectedDistricts.includes(currDistrict);
  //   });
  //   if (notSelectedDistricts.length >= 1 &&
  //       this.state.selectedDistricts[0] !== null &&
  //       this.state.selectedDistricts[1] !== null
  //     ) {
  //       console.log(notSelectedDistricts)
  //
  //     // this.setState({selectedDistricts}, function () {
  //     // notSelectedDistricts.selected = !notSelectedDistricts.selected;
  //     // })
  //   }
  // };

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
          comparisionData={this.state.comparedDistricts}
          // selectedClass='district-card'
          comparisionCard={true}
        />
        {
          this.state.districts &&
          <DistrictsContainer
            districts={this.state.districts}
            handleSelect={this.handleSelect}
            selectedDistricts={this.state.selectedDistricts}
          />
        }
      </div>
    );
  }
}

export default App;