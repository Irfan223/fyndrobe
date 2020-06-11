import React, { Component } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import customStyle from './product-create.module.css';
// import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from '../../../../axiosConfig';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const InputField = React.lazy(() => import('../../TextFields/InputField'));
const AutocompleteSingle = React.lazy(() => import('../../TextFields/AutocompleteSingle'));
const AutocompleteMultiple = React.lazy(() => import('../../TextFields/AutocompleteMultiple'));
const categories = [
    { id: 'clothe', itemName: 'Clothe', disabled: false },
    { id: 'accessory', itemName: 'Accessories (Comming soon)', disabled: true },
    { id: 'jewellery', itemName: 'Jewellery (Comming soon)', disabled: true }
];
const genders = [
    { id: 'women', itemName: 'Women', disabled: false },
    { id: 'girl', itemName: 'Girl', disabled: false },
    { id: 'men', itemName: 'Men (Comming soon)', disabled: true },
    { id: 'boy', itemName: 'Boy (Comming soon)', disabled: true },
];
const clotheCategories = [
    { id: 'kurta', itemName: 'kurta', disabled: false },
    { id: 'leggins', itemName: 'leggins', disabled: false },
    { id: 'kurta with dupatta', itemName: 'kurta with dupatta', disabled: false },
    { id: 'kurta with leggins', itemName: 'kurta with leggins', disabled: false },
    { id: 't-shirt', itemName: 't-shirt (Comming soon)', disabled: true },
    { id: 'shirt', itemName: 'shirt (Comming soon)', disabled: true }
];
// const accessories = [
//     { id: 1, itemName: 'Women', disabled: false },
//     { id: 2, itemName: 'Girl', disabled: false },
//     { id: 3, itemName: 'Men (Comming soon)', disabled: true },
//     { id: 4, itemName: 'Boy (Comming soon)', disabled: true },
// ];
// const Jewelleries = [
//     { id: 1, itemName: 'Women', disabled: false },
//     { id: 2, itemName: 'Girl', disabled: false },
//     { id: 3, itemName: 'Men (Comming soon)', disabled: true },
//     { id: 4, itemName: 'Boy (Comming soon)', disabled: true },
// ];

const shippingTime = [
    { id: '1 day', itemName: '1 day', selected: false },
    { id: '2 days', itemName: '2 days', selected: false },
    { id: '3 days', itemName: '3 days', selected: false },
    { id: '4 days', itemName: '4 days', selected: false },
    { id: '5 days', itemName: '5 days', selected: false },
    { id: '6 days', itemName: '6 days', selected: false },
    { id: '7 days', itemName: '7 days', selected: false },
    { id: '8 days', itemName: '8 days', selected: false },
    { id: '9 days', itemName: '9 days', selected: false },
    { id: '10 days', itemName: '10 days', selected: false },
    { id: '11 days', itemName: '11 days', selected: false },
    { id: '12 days', itemName: '12 days', selected: false },
    { id: '13 days', itemName: '13 days', selected: false },
    { id: '14 days', itemName: '14 days', selected: false },
    { id: '15 days', itemName: '15 days', selected: false }
];
const colors = [
    { id: 'Blue', itemName: 'Blue', selected: false },
    { id: 'Black', itemName: 'Black', selected: false },
    { id: 'Navy Blue', itemName: 'Navy Blue', selected: false },
    { id: 'Green', itemName: 'Green', selected: false },
    { id: 'Pink', itemName: 'Pink', selected: false },
    { id: 'Off White', itemName: 'Off White', selected: false },
    { id: 'White', itemName: 'White', selected: false },
    { id: 'Red', itemName: 'Red', selected: false },
    { id: 'Beige', itemName: 'Beige', selected: false },
    { id: 'Yellow', itemName: 'Yellow', selected: false },
    { id: 'Mustard', itemName: 'Mustard', selected: false },
    { id: 'Grey', itemName: 'Grey', selected: false },
    { id: 'Maroon', itemName: 'Maroon', selected: false },
    { id: 'Peach', itemName: 'Peach', selected: false },
    { id: 'Orange', itemName: 'Orange', selected: false },
    { id: 'Brown', itemName: 'Brown', selected: false },
    { id: 'Cream', itemName: 'Cream', selected: false },
    { id: 'Teal', itemName: 'Teal', selected: false },
    { id: 'Coral', itemName: 'Coral', selected: false },
    { id: 'Olive', itemName: 'Olive', selected: false },
    { id: 'Rust', itemName: 'Rust', selected: false },
    { id: 'Sea Green', itemName: 'Sea Green', selected: false },
    { id: 'Multi', itemName: 'Multi', selected: false },
    { id: 'Purple', itemName: 'Purple', selected: false },
    { id: 'Charcoal', itemName: 'Charcoal', selected: false },
    { id: 'Turquoise Blue', itemName: 'Turquoise Blue', selected: false },
    { id: 'Magenta', itemName: 'Magenta', selected: false },
    { id: 'Lime Green', itemName: 'Lime Green', selected: false },
    { id: 'Burgundy', itemName: 'Burgundy', selected: false },
    { id: 'Taupe', itemName: 'Taupe', selected: false },
    { id: 'Coffee Brown', itemName: 'Coffee Brown', selected: false },
    { id: 'Mauve', itemName: 'Mauve', selected: false },
    { id: 'Lavender', itemName: 'Lavender', selected: false },
    { id: 'Gold', itemName: 'Gold', selected: false },
    { id: 'Khaki', itemName: 'Khaki', selected: false },
    { id: 'Grey Melange', itemName: 'Grey Melange', selected: false },
    { id: 'Tan', itemName: 'Tan', selected: false },
    { id: 'Nude', itemName: 'Nude', selected: false },
    { id: 'Fluorescent Green', itemName: 'Fluorescent Green', selected: false },
    { id: 'Silver', itemName: 'Silver', selected: false },
    { id: 'Rose', itemName: 'Rose', selected: false },
    { id: 'Steel', itemName: 'Steel', selected: false },
    { id: 'Bronze', itemName: 'Bronze', selected: false }
];
const size = [
    { id: 'S', itemName: 'S', selected: false },
    { id: 'M', itemName: 'M', selected: false },
    { id: 'L', itemName: 'L', selected: false },
    { id: 'XL', itemName: 'XL', selected: false },
    { id: 'XXL', itemName: 'XXL', selected: false },
    { id: 'XXXL', itemName: 'XXXL', selected: false }
];
const classes = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    input: {

    }
}));

class ProductCreate extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: '',
            productCategory: '',
            gender: '',
            clotheCategory: '',
            productTitle: '',
            productBrandName: '',
            productColor: '',
            costPrice: '',
            sellingPrice: '',
            productDescription: '',
            ProductOccasion: '',
            productKurtaFabric: '',
            productSalwarFabric: '',
            productDupattaFabric: '',
            productWork: '',
            productNeck: '',
            productPrintsAndPattern: '',
            productSleeve: '',
            productWashCare: '',
            productWeight: '',
            productShippedIn: '',
            productQuantity: '',
            productImages: [],
            productImageUrls: [],
            productSize: [],
        };
    }
    submitAllValue = (event) => {
        event.preventDefault();
        // craete array of object for size and quantity
        const productSizeCopy = [];
        const productSizeArray = this.state.productSize;
        productSizeArray.forEach((item) => {
            productSizeCopy.push({ 'value': item, 'quantity': this.state.productQuantity })
        });
        // end
        const modelObject = {
            isAdded: false,
            sellerEmail: cookies.get('email'),
            productCategory: this.state.productCategory,
            gender: this.state.gender,
            productSizeAndQuantity: productSizeCopy,
            clotheCategory: this.state.clotheCategory,
            productShippedIn: this.state.productShippedIn,
            productTitle: this.state.productTitle,
            productBrandName: this.state.productBrandName,
            productColor: this.state.productColor,
            costPrice: this.state.costPrice,
            sellingPrice: this.state.sellingPrice,
            productDescription: this.state.productDescription,
            ProductOccasion: this.state.ProductOccasion,
            productKurtaFabric: this.state.productKurtaFabric,
            productSalwarFabric: this.state.productSalwarFabric,
            productDupattaFabric: this.state.productDupattaFabric,
            productWork: this.state.productWork,
            productNeck: this.state.productNeck,
            productPrintsAndPattern: this.state.productPrintsAndPattern,
            productSleeve: this.state.productWork,
            productWashCare: this.state.productSleeve,
            productWeight: this.state.productWeight,
            productShippedIn: this.state.productShippedIn,
            productQuantity: this.state.productQuantity,
            productImages: this.state.productImageUrls,
            productSize: this.state.productSize,
        }
        // console.log(modelObject)
        // send object to database
        axios.post('inventory', modelObject)
            .then(res => {
                if (res.data['code'] === 200) {
                   this.setState({
                       isAdded: true,
                   }, () => {
                       console.log('Product is Added');
                   })
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    selectProductCategory = (event, value) => {
        this.setState({
            productCategory: value.id
        }, () => { })
    }
    selectGender = (event, value) => {
        this.setState({
            gender: value.id
        }, () => { })
    }
    selectClotheCategory = (event, value) => {
        this.setState({
            clotheCategory: value.id
        }, () => { })
    }
    selectSize = (event, value) => {
        var copy = [];
        value.forEach((item) => {
            copy.push(item.id)
        });
        // // console.log(copy)
        this.setState({
            productSize: copy
        }, () => { })
        // console.log(this.state.size);
    }
    selectColor = (event, value) => {
        this.setState({
            productColor: value.id
        }, () => { })
    }
    selectShippingDay = (event, value) => {
        this.setState({
            productShippedIn: value.id
        }, () => { })
    }
    onChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        }, () => { });
    }
    getImage = (e) => {
        const files = Array.from(e.target.files);
        this.setState({
            productImages: files
        }, () => { })
    }
    uploadImage = (event) => {
        var ref = this;
        event.preventDefault();
        ref.setState({
            isLoading: 'true',
        })
        const productImages = this.state.productImages;
        const formData = new FormData();
        for (let i = 0; i < productImages.length; i++) {
            formData.append('images', productImages[i], productImages[i]['name'])
        }
        axios.post('imageUpload', formData)
            .then(function (response) {
                //handle success
                const copyUrls = [];
                const urls = response.data.urls;
                urls.forEach((item) => {
                    copyUrls.push(item.secure_url)
                })
                // console.log(response.data.urls);
                ref.setState({
                    isLoading: 'false',
                    productImageUrls: copyUrls,
                    productImages: []
                })
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    resetImage = (event) => {
        event.preventDefault();
        this.setState({
            productImages: []
        }, () => {
            // alert(this.state.productImages.length)
        })
    }
    render() {
        const isAdded = this.state.isAdded;
        var circularProgress;
        if (this.state.isLoading == 'true') {
            circularProgress = <div style={{ position: 'absolute', top: '35%', left: '35%' }}>
                <CircularProgress size={80} />
            </div>
        } else if (this.state.isLoading == 'false') {
            circularProgress =
                <div style={{ position: 'absolute', top: '35%', left: '20%', color: 'white' }}>
                    <div >Uploaded Successfullly</div>
                </div>
        } else {
            circularProgress = <div>
                <div style={{ position: 'absolute', top: '35%', left: '30%', color: 'white' }}>Upload Image</div>
                <div style={{ position: 'absolute', top: '45%', left: '25%', color: 'white' }}>Only 5 Images allowed</div>
            </div>
        }
        var uploadReset;
        if (this.state.productImages.length != 0) {
            uploadReset = <div className="container-fluid bg-white rounded">
                <div className="row pt-2 pb-2">
                    <div className="col-6 col-sm-6">
                        <Button variant="contained" color="primary" id={customStyle.submitButton} onClick={this.resetImage}>RESET</Button>
                    </div>
                    <div className="col-6 col-sm-6">
                        <Button className="float-right" variant="contained" color="primary" id={customStyle.submitButton} onClick={this.uploadImage}>UPLOAD</Button>
                    </div>
                </div>
            </div>
        }
        return (
            <div className="App">
                {/* expansion 1 */}
                <div className="row flex-column-reverse flex-sm-row">
                    <div className="col-12 col-sm-8">
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography className={classes.heading}>Mandatory Product Details</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <div className="container-fluid">
                                    <form onChange={this.onChange}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <AutocompleteSingle
                                                    id="product-category"
                                                    options={categories}
                                                    getOptionDisabled={(option) => option.disabled === true}
                                                    onChange={this.selectProductCategory}
                                                    renderInput={(params) => <TextField {...params} label="Product Category" variant="outlined" />}
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <AutocompleteSingle
                                                    id="gender-category"
                                                    options={genders}
                                                    getOptionDisabled={(option) => option.disabled === true}
                                                    onChange={this.selectGender}
                                                    renderInput={(params) => <TextField {...params} label="Select Gender" variant="outlined" />}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <AutocompleteSingle
                                                    id="clothe-category"
                                                    options={clotheCategories}
                                                    getOptionDisabled={(option) => option.disabled === true}
                                                    onChange={this.selectClotheCategory}
                                                    renderInput={(params) => <TextField {...params} label="Clothe Category" variant="outlined" />}
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <InputField name="productBrandName" label="Brand Name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <InputField name="productTitle" label="Product Title" />
                                                <AutocompleteMultiple
                                                    id="product-size"
                                                    options={size}
                                                    onChange={this.selectSize}
                                                    renderInput={(params) => <TextField {...params} label="Size" variant="outlined" />}
                                                />
                                                <InputField name="costPrice" label="Cost Price" />
                                            </div>
                                            <div className="col-sm-6">
                                                <AutocompleteSingle
                                                    id="clothe-color"
                                                    options={colors}
                                                    getOptionDisabled={(option) => option.disabled === true}
                                                    onChange={this.selectColor}
                                                    renderInput={(params) => <TextField {...params} label="Select Color" variant="outlined" />}
                                                />
                                                <InputField name="productQuantity" label="Quantity" />
                                                <InputField name="sellingPrice" label="Selling Price" />
                                            </div>

                                        </div><br />
                                        <div className="row">
                                            <div className="col-12 col-sm-12">
                                                <textarea className="w-100 p-2 rounded" name="productDescription" onChange={this.onChange} rows="5" placeholder="Minimum 3 rows" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        {/* expansion 2 */}
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>More Product Details</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="container-fluid">
                                    <form onChange={this.onChange}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <InputField name="ProductOccasion" label="Occasion" />
                                                <InputField name="productPrintsAndPattern" label="Prints and Pattern" />
                                                <InputField name="productKurtaFabric" label="Kurta Fabric" />
                                                <InputField name="productSalwarFabric" label="Salwar Fabric" />
                                                <InputField name="productDupattaFabric" label="Dupatta Fabric" />
                                            </div>
                                            <div className="col-sm-6">
                                                <InputField name="productWork" label="Work Type" />
                                                <InputField name="productNeck" label="Neck" />
                                                <InputField name="productSleeve" label="Sleeve" />
                                                <InputField name="productWashCare" label="Wash Care" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        {/* expansion 4 */}
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography className={classes.heading}>Shipping Details</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <AutocompleteSingle
                                                id="shipping-time"
                                                options={shippingTime}
                                                getOptionDisabled={(option) => option.disabled === true}
                                                onChange={this.selectShippingDay}
                                                renderInput={(params) => <TextField {...params} label="Shipping Day" variant="outlined" />}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <InputField name="productWeight" onChange={this.onChange} label="Product Weight" />
                                        </div>
                                    </div>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        {/* form submit button */}
                        <div className="row mt-2">
                            <div className="col-12 col-sm-12">
                                <Button variant="contained" color="primary" className="w-100" id={customStyle.addProduct} onClick={this.submitAllValue}>Add Product</Button>
                            </div>
                        </div>
                        {/* end form submit buttom */}
                    </div>
                    <div className="col-12 col-sm-4">
                        <input
                            accept="image/*"
                            className={classes.input}
                            onChange={this.getImage}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <div className="bg-white">
                            <label htmlFor="raised-button-file" style={{ position: 'relative', }}>
                                <Button variant="raised" component="span">
                                    <img src="https://img.icons8.com/color/317/000000/add-image.png" />
                                </Button>
                                {/* <div style={{ position: 'absolute', top: '35%', left: '35%' }}> */}
                                {circularProgress}
                                {/* </div> */}
                            </label>
                            {uploadReset}
                        </div>
                        <br />
                    </div>
                </div>
                <div className="p-5">
                {isAdded ? (
                    <div className="text-success">Your product has been added successfully</div>
                ) : (
                    <div></div>
                )}
                </div>
                <br />
            </div>
        );

    }
}

export default ProductCreate;