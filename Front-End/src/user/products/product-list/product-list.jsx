import React, { Component, Fragment } from 'react';
import { Divider } from '@material-ui/core';
import productCss from './product.module.css';
import axios from '../../../axiosConfig';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
const Header = React.lazy(() => import('../../header/header'));
const Footer = React.lazy(() => import('../../footer/footer'));
const Dropdown = React.lazy(() => import('../../dropdown'));
const Slider = React.lazy(() => import('../../slider'));
const Checkbox = React.lazy(() => import('../../buttons/checkbox/checkbox'));
const Radio = React.lazy(() => import('../../buttons/radio/radio'));
// Dropdown Array-------
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
    { value: "10 to 20", label: "10% and above" },
    { value: "20 to 30", label: "20% and above" },
    { value: "30 to 40", label: "30% and above" },
    { value: "40 to 50", label: "40% and above" },
    { value: "50 to 60", label: "50% and above" },
    { value: "60 to 70", label: "60% and above" },
    { value: "70 to 80", label: "70% and above" },
    { value: "80 to 100", label: "80% and above" },
];
// End dropdown array
class ProductList extends Component {
    state = {
        isUpdate: false,
        mensSelected: [],
        size: [],
        selectedOption: "",
        data: [],
        filterData: [],
        preFilterData: []
    };
    componentDidMount() {
        this.getAllData();
    }
    getAllData() {
        const gender = this.props.match.params.gender
      console.log(this.props.match.params.gender)
        const productType = this.props.match.params.productType;
        const params = {
            gender: gender,
            productTitle: productType
        }
        axios.post('product', params)
            .then(res => {
                console.log(res.data)
                this.setState({
                    data: res.data,
                    filterData: res.data
                });
            })
            .catch(function (res) {
                console.log(res);
            })
    }
    componentDidUpdate(prevProps, prevState) {
        // const { something } = this.props;
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.getAllData();
        } else {

        }
    }
    
    onRadio = (event) => {
        // alert(selectedOption.value);
        let queryString = "discount=" + event.target.value;
        this.props.history.push(this.props.location.pathname+'?'+queryString);
        this.setState({
            selectedOption: event.target.value,
        });
    };
    onCheck = (e) => {
        //copying the state array to in local array
        const mensSelected = this.state.mensSelected;
        const filterData = this.state.filterData;
        const preFilterData = this.state.preFilterData;
        const data = this.state.data;
        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to discountRange array
            mensSelected.push(+e.target.value);
        } else {
            // or remove the value from the unchecked checkbox from the array
            const index = mensSelected.indexOf(+e.target.value);
            mensSelected.splice(index, 1);
        }
        // update the state with the new array of discountRange
        this.setState({ mensSelected: mensSelected });
        for (const data of this.state.data) {
            for (const id of mensSelected) {
                switch (id) {
                    case 1: {
                        if (data.id === 1) {
                            this.state.preFilterData.push(data);
                        }
                        break;
                    }
                    case 2: {
                        if (data.id === 2) {
                            this.state.preFilterData.push(data);
                        }
                        break;
                    }
                    case 3: {
                        if (data.id === 3) {
                            this.state.preFilterData.push(data);
                        }
                        break;
                    }
                    case 4: {
                        if (data.id === 4) {
                            this.state.preFilterData.push(data);
                        }
                        break;
                    }
                    case 5: {
                        if (data.id === 5) {
                            this.state.preFilterData.push(data);
                        }
                        break;
                    }
                }
            }
        }
        this.setState({
            filterData: preFilterData,
            preFilterData: []
        });
        if (this.state.mensSelected.length === 0) {
            this.setState({
                filterData: this.state.data
            })
        }
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
        let queryString = "size=" + size;
        this.props.history.push(queryString);
        // update the state with the new array of discountRange
        this.setState({ size: size });
    };

    render() {
        localStorage.setItem('curUrl', this.props.match.url);
        console.log(this.props)
        
//         {const searchParams = new URLSearchParams();
//         searchParams.append("type", "all");
//         searchParams.append("query", "coins");
//         searchParams.toString(); // "type=all&query=coins"

//          // update browser url
//         this.props.history.push(this.props.location.pathname + searchParams.toString());
//         // or
//         this.props.history.push({
//         pathname: this.props.location.pathname,
//         search: searchParams.toString()
//         })
//         let search = this.props.location.search;
//         let params = new URLSearchParams(search);
//         let discount = params.get('size');}
        // console.log(discount)
        return (
            <Fragment>
                <Header />
                <div className="body" id={productCss.body}>
                    <div className="container-fluid" id={productCss.containerFluid}>
                        <div className="row p-3">
                            <div className="col-sm-2 mt-3 text-uppercase font-weight-bold" id={productCss.filter}>
                                FILTERS
                            </div>
                            <div className="col-sm-10">

                            </div>
                        </div>
                        <Divider />
                        <div className="row no-gutters">
                            <div className="col-sm-2 p-0 m-0 border-right" id={productCss.filter}>
                                {/* <div className="slider mr-2"> <Slider /></div> */}
                                {/* <Divider /> */}
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
                                <p>Radio: {this.state.selectedOption}</p>
                            </div>
                            <div className="col-12 col-sm-10 p-0 m-0" id={productCss.mobileView}>
                                <div className={productCss.mobile}>
                                    <div className="row no-gutters">
                                        {this.state.filterData.map(item => (
                                            <div className="col-6 col-sm-3" id={productCss.product}>
                                                <Link to={`/product-details/${item.productTitle}/${item._id}`} id={productCss.link}>
                                                <img src={item.color.image[0]} width="100%" />
                                                <div className="productDetails p-2">
                                                  <div><strong>{item.brandName}</strong></div>
                                                  <div>{item.productTitle}</div>
                                                  size: {item.size.map(s => (
                                                      <span>{s.value}&nbsp;</span>
                                                  ))}
                                                  <div>
                                                  <span><strong>Rs {item.sellingPrice}</strong></span>&nbsp;<span className="font-weight-light"><del>Rs {item.costPrice}</del></span>&nbsp;<span style={{color: 'orange'}}>({(((item.costPrice - item.sellingPrice)/item.costPrice)*100).toFixed(0)}% OFF)</span>
                                                   </div>
                                                </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Pagination count={10} size="small" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default ProductList;