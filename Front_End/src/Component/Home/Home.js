import React, { Component } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import explore from '../ExploreCategories/ExploreCategories';
import { Link } from 'react-router-dom';
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
        console.log(this.setState.json)
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading....</div>
        } else {
            return (
                <div className="App">
                    <div className="header"> <Header /> </div>
                    <section className="sectionbody">
                        <div className="content">
                            {/*
                            {items.map(item => (
                                <span key={item.id}>
                                    <p>Title: {item.title}</p>
                                </span>
                            ))}
                        </div> */}
                            {/* start slider images */}
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        id="image-fixed"
                                        src={require("../../assets/slider Images/image1.jpg")}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption className="carousel-caption">
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100"
                                        id="image-fixed"
                                        src={require("../../assets/slider Images/image2.jpg")}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption className="carousel-caption">
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        id="image-fixed"
                                        src={require("../../assets/slider Images/image3.jpg")}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption className="carousel-caption">
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel> <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="https://img.icons8.com/ios/50/000000/money-bag.png" /><br /><br />
                                                <h6 className="card-title"><strong>MONEY BACK GURANTEE</strong></h6>
                                                <p className="card-text">Shall open divide a one.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="https://img.icons8.com/ios/50/000000/delivery.png" /> <br /> <br />
                                                <h6 className="card-title"><strong>FREE DELIVERY</strong></h6>
                                                <p className="card-text">Shall open divide a one</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="https://img.icons8.com/android/50/000000/headset.png" /><br /><br />
                                                <h6 className="card-title"><strong>ALWAYS SUPPORT</strong></h6>
                                                <p className="card-text">Content of the card.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="https://img.icons8.com/android/50/000000/private2.png" /><br /><br />
                                                <h6 className="card-title"><strong>SECURE PAYMENT</strong></h6>
                                                <p className="card-text">Content of the card.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <br /><br /><br /><br />
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <h4><strong>FEATURED PRODUCT</strong></h4>
                                            <hr />
                                            <h6>Bring called seed first of third give itself now ment</h6>
                                        </div>
                                    </div>
                                </div><br /> <br /><br /><br />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="imagebody">
                                                <Link to="/explore/Men's-t-shirt">
                                                    <img src={require("../../assets/images/t-shirt.jpg")} width="340px" height="200px" /></Link><br /><br />
                                                <div className="container">
                                                    <h6 className="card-title"><strong>Latest Men's T-Shirt</strong></h6>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p className="card-text">Rs 300</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="card-text"><strike>Rs 500</strike></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="imagebody">
                                                <Link to="/explore/mobile-cover">
                                                    <img src={require("../../assets/images/mobile-cover.jpg")} width="340px" height="200px" /></Link><br /><br />
                                                <div className="container">
                                                    <h6 className="card-title"><strong>Mobile Covers</strong></h6>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p className="card-text">Rs 300</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="card-text"><strike>Rs 500</strike></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="imagebody">
                                                <Link to="/explore/bags">
                                                    <img src={require("../../assets/images/bags.jpg")} width="340px" height="200px" /></Link><br /><br />
                                                <div className="container">
                                                    <h6 className="card-title"><strong>Bags</strong></h6>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p className="card-text">Rs 300</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="card-text"><strike>Rs 500</strike></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br /><br />
                                    <div className="container" id="offersection">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <img src={require("../../assets/offer-image/t-shirt.jpg")} width="500px" height="300px" />
                                            </div>
                                            <div className="col-sm-6" id="offerText">
                                                <h4>ALL MEN’S COLLECTION</h4>
                                                <h1><strong>50% OFF</strong></h1>
                                                <h6>Limited Time Offer</h6>
                                            </div>
                                        </div>
                                    </div> <br /><br /><br /><br /><br />
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <h4><strong>NEW PRODUCTS</strong></h4>
                                                <hr />
                                                <h6>Bring called seed first of third give itself now ment</h6>
                                            </div>
                                        </div>
                                    </div><br /><br /><br /><br />
                                    <div className="container" >
                                        <div className="row">
                                            <div className="col-sm-6" id="newArrival">
                                                <div className="imagebody">
                                                    <div className="container">
                                                    <h4>COLLECTION OF 2019</h4>
                                                    <h3><strong>MEN’S SUMMER T-SHIRT</strong></h3>
                                                    </div>
                                               
                                                <img id="newArrival" src={require("../../assets/images/t-shirt.jpg")} width="510px" height="425px" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6" id="newArrival">
                                                <div className="row">
                                                    <div className="col-sm-6" id="imageborder">
                                                    <div className="imagebody">
                                                        <img src={require("../../assets/images/t-shirt.jpg")} width="255px" height="200px" />
                                                            <div className="container">
                                                            <div>Latest T-Shirt</div>
                                                            <div>Rs 600</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6" id="imageborder">
                                                    <div className="imagebody">
                                                        <img src={require("../../assets/images/t-shirt.jpg")} width="255px" height="200px" />
                                                            <div>Latest T-Shirt</div>
                                                            <div>Rs 600</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6" id="imageborder">
                                                    <div className="imagebody">
                                                        <img src={require("../../assets/images/t-shirt.jpg")} width="255px" height="200px" />
                                                            <div>Latest T-Shirt</div>
                                                            <div>Rs 600</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6" id="imageborder">
                                                    <div className="imagebody">
                                                        <img src={require("../../assets/images/t-shirt.jpg")} width="255px" height="200px" />
                                                            <div>Latest T-Shirt</div>
                                                            <div>Rs 600</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div><br />
                    </section>
                </div>
            );
        }
    }
}
export default Home;
