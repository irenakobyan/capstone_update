import React, {Component} from 'react';
import Filter from './Filter/Filter.js';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RenderCafe from './RenderCafe/RenderCafe.js';
import classes from './Cafes.module.css';
import { cafe } from "../../data.json";

class Cafes extends Component {
  state = {
    search: "",
    showCafe: false,
    url: ""
  };

  handleClick = (cafe) => {
    return(
      <div>
        <h1>Ho</h1>
      </div>
    )
      this.setState({
        showCafe:  !this.state.showCafe,
      })
    }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {

    const filteredCafes = cafe.filter(cafe => {
         return cafe.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
       });

  return(
  <div>
    <div className={classes.grow}>
        <div className={classes.search}>
          <SearchIcon />
            <InputBase
              placeholder="Search"
              classes={ classes.inputRoot}
              inputProps={{ 'aria-label': 'search' }}
              onChange={this.handleChange}
            />
        </div>
    </div>

    <div className={classes.filter}>
      <Filter />

      <div className={classes.cafeItems}>
                {filteredCafes.map(cafe => {
                  return(
              <div onClick={this.handleClick}>
                  <RenderCafe
                    name={cafe.name}
                    logo= {cafe.logo}
                    review = {cafe.review}
                    address={cafe.address}
                    phone={cafe.phone}
                    />
              </div>
                  )})}
      </div>

   </div>

</div>
    )
  }
}

 export default Cafes;

 //url: this.props.history.push(this.props.location.pathname + '/' + cafe.name),
