import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import product from '../productDetails/productDetails';
import { Link } from 'react-router-dom';
import './ExploreCategories.css';
const options = [
    { value: "chocolate", label: 'Chocolate' },
    { value: "strawberry", label: 'Strawberry' },
    { value: "vanilla", label: 'Vanilla' },
];
const categories = [
    { value: '1', label: 'shirt' },
    { value: '2', label: 'jeans' },
    { value: '3', label: 't-shirt' }
];
class ExploreCategories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedCheckbox: [],
            selectedOption: '',
        }
        this.onRadio = this.onRadio.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onRadio(selectedOption) {
        // alert(selectedOption.value);
        this.setState({
            selectedOption: selectedOption.target.value
        });
    }
    onCheck(e) {
        const selectedCheckbox = this.state.selectedCheckbox
        let index

        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            selectedCheckbox.push(+e.target.value)
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = selectedCheckbox.indexOf(+e.target.value)
            selectedCheckbox.splice(index, 1)
        }

        // sort the array
        selectedCheckbox.sort()

        // update the state with the new array of options
        this.setState({ selectedCheckbox: selectedCheckbox })
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div className="App">
                <div className="header">
                <Header />
                </div>
                {/* Main body */}
                <section className="sectionbody">
                <div id="content">
                    {/* <div className="container"> */}
                        <div><strong>FILTERS</strong></div><br />
                        <div className="row">
                            <div className="col-sm-3" id="left">
                            <div className="filter">
                                {categories.map(category => (
                                    <span key={category.id}>
                                        <label className="containercheckbox">{category.label}
                                        <input type="checkbox"
                                            onChange={this.onCheck}
                                            value={category.value}
                                        />
                                        <span className="checkmark"></span>
                                        </label>
                                    </span>
                                ))}
                                <hr />
                                {/* <div className="selected-items">
                                    {this.state.selectedCheckbox.map(number =>
                                        <p key={number}>item: {number}</p>
                                    )}
                                </div> */}

                                {options.map(option => (
                                    <span key={option.id}>
                                        <label className="radio">
                                            <input type="radio"
                                                name="radio1"
                                                checked={this.state.name}
                                                onChange={this.onRadio} value={option.value} />
                                            <span>{option.label}</span>
                                        </label>
                                    </span>
                                ))}
                                Radio: {selectedOption}
                                </div>
                            </div>
                            <div className="col-sm-9" id="right">
                                <div className="row" id="mainbody">
                                    <div className="col-sm-4">
                                        <div id="imagebackground">
                                            <Link to="/product">
                                            <img src={require("../../assets/images/t-shirt.jpg")} width="310" /><br /><br />
                                            </Link>
                                            <h6 className="card-title"><strong>MONEY BACK GURANTEE</strong></h6>
                                            <p className="card-text">Shall open divide a one.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div id="imagebackground">
                                            <img src={require("../../assets/images/t-shirt.jpg")} width="310" /> <br /> <br />
                                            <h6 className="card-title"><strong>FREE DELIVERY</strong></h6>
                                            <p className="card-text">Shall open divide a one</p>
                                        </div>

                                    </div>
                                    <div className="col-sm-4">
                                        <div id="imagebackground">
                                            <img src={require("../../assets/images/t-shirt.jpg")} width="310" /><br /><br />
                                            <h6 className="card-title"><strong>ALWAYS SUPPORT</strong></h6>
                                            <p className="card-text">Content of the card.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div id="imagebackground">
                                            <img src={require("../../assets/images/t-shirt.jpg")} width="310" /><br /><br />
                                            <h6 className="card-title"><strong>MONEY BACK GURANTEE</strong></h6>
                                            <p className="card-text">Shall open divide a one.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div id="imagebackground">
                                            <img src={require("../../assets/images/t-shirt.jpg")} width="310" /><br /><br />
                                            <h6 className="card-title"><strong>MONEY BACK GURANTEE</strong></h6>
                                            <p className="card-text">Shall open divide a one.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div id="imagebackground">
                                            <img src={require("../../assets/images/t-shirt.jpg")} width="310" /><br /><br />
                                            <h6 className="card-title"><strong>MONEY BACK GURANTEE</strong></h6>
                                            <p className="card-text">Shall open divide a one.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div id="imagebackground">
                                            <img src={require("../../assets/images/t-shirt.jpg")} width="310" /><br /><br />
                                            <h6 className="card-title"><strong>MONEY BACK GURANTEE</strong></h6>
                                            <p className="card-text">Shall open divide a one.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div id="imagebackground">
                                            <img src={require("../../assets/images/t-shirt.jpg")} width="310" /><br /><br />
                                            <h6 className="card-title"><strong>MONEY BACK GURANTEE</strong></h6>
                                            <p className="card-text">Shall open divide a one.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div id="imagebackground">
                                            <img src={require("../../assets/images/t-shirt.jpg")} width="310" /><br /><br />
                                            <h6 className="card-title"><strong>MONEY BACK GURANTEE</strong></h6>
                                            <p className="card-text">Shall open divide a one.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                <Footer />
                </section>
                </div>
        );
    }

}
export default ExploreCategories;