import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import { connect } from 'react-redux';
const Checkbox = React.lazy(() => import('./buttons/checkbox/checkbox'));
const Radio = React.lazy(() => import('./buttons/radio/radio'));
const mens = [
  { value: "1", label: "Shirt" },
  { value: "2", label: "Jeans" },
  { value: "3", label: "T-Shits" },
  { value: "4", label: "Joggers" },
  { value: "5", label: "Jacket" },
];
const price = [
  { value: "1", label: "S" },
  { value: "2", label: "M" },
  { value: "3", label: "L" },
  { value: "4", label: "XL" },
  { value: "5", label: "XXL" },
  { value: "6", label: "XXXL" }
];
const size = [
  { value: "1", label: "S" },
  { value: "2", label: "M" },
  { value: "3", label: "L" },
  { value: "4", label: "XL" },
  { value: "5", label: "XXL" },
  { value: "6", label: "XXXL" }
];

const discountRange = [
  { value: "above 10", label: "10% and above" },
  { value: "above 20", label: "20% and above" },
  { value: "above 30", label: "30% and above" },
  { value: "above 40", label: "40% and above" },
  { value: "above 50", label: "50% and above" },
  { value: "above 60", label: "60% and above" },
  { value: "above 70", label: "70% and above" },
  { value: "above 80", label: "80% and above" },
];

class Dropdown extends Component {
  state = {
    mensSelected: [],
    size: [],
    selectedOption: "",
  };
  onRadio = (event) => {
    // alert(selectedOption.value);
    this.setState({
      selectedOption: event.target.value,
    });
  };
  onCheck = (e) => {
    //copying the state array to in local array
    const mensSelected = this.state.mensSelected;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to discountRange array
      mensSelected.push(+e.target.value);
    } else {
      // or remove the value from the unchecked checkbox from the array
      const index = mensSelected.indexOf(+e.target.value);
      mensSelected.splice(index, 1);
    }

    // sort the array
    // const array = mensSelected.sort((a, b) => {
    //   return a - b;
    // });
    // update the state with the new array of discountRange
    // this.setState({ mensSelected: mensSelected });
    this.props.updateMensCheckbox(mensSelected);
  };
  onSize = (e) => {
    //copying the state array to in local array
    const size = this.state.size;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to discountRange array
      size.push(+e.target.value);
    } else {
      // or remove the value from the unchecked checkbox from the array
      const index = size.indexOf(+e.target.value);
      size.splice(index, 1);
    }

    // sort the array
    const array = size.sort((a, b) => {
      return a - b;
    });
    // console.log(array);

    // update the state with the new array of discountRange
    this.setState({ size: size });
  };

  // window.scrollTo(0, 0);

  render() {
    const { selectedOption, mensSelected } = this.state;
    return (
      <React.Fragment>
        {/*  category */}
        <p
          className='pt-2 text-uppercase font-weight-bold '
          style={{ fontSize: "14px" }}
        >
          CATEGORIES
            </p>
        {mens.map((men) => (
          <Checkbox
            key={men.id}
            label={men.label}
            value={men.value}
            onchange={this.onCheck}
          />
        ))}
        <Divider />
        {/* size */}
        <p
          className='pt-2 text-uppercase font-weight-bold '
          style={{ fontSize: "14px" }}
        >
          size
            </p>
        {size.map((s) => (
          <Checkbox
            key={s.id}
            label={s.label}
            value={s.value}
            onchange={this.onSize}
          />
        ))}
        {/* Radio */}
        <p
          className='pt-2 text-uppercase font-weight-bold '
          style={{ fontSize: "14px" }}
        >
          discount range
            </p>
        {discountRange.map((range) => (
          <Radio
            onchange={this.onRadio}
            value={range.value}
            label={range.label}
          />
        ))}
        <p>Radio: {selectedOption}</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkbox: state.mensSelected,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateMensCheckbox: (mensSelected) => { dispatch({ type: 'UPDATE_MENS_CHECKBOX', payload: mensSelected }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
