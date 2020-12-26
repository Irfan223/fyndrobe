import React, { Component } from "react";
import cssClass from "./home.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import carouseImg1 from "../../assets/images/tshirt.jpg";
import carouseImg2 from "../../assets/images/tshirt.jpg";
import carouseImg3 from "../../assets/images/tshirt.jpg";
import carouseImg4 from "../../assets/images/tshirt.jpg";
import MenuItem from "../MenuItem/MenuItem";
import { Carousel } from "antd";
import axios from "../../axiosConfig";
class Home extends Component {
  state = {
    items: [],
    isLoaded: true,
  };

  componentDidMount() {
    axios
      .get("homeCarousel")
      .then((res) => {
        // console.log(res.data);
        const copyItmes = [];
        res.data.forEach((item) => {
          copyItmes.push({
            title: item.images.title,
            url: item.images.url,
            link: item.images.link,
          });
        });
        this.setState(
          {
            items: copyItmes,
          },
          () => {
            // console.log(this.state.items);
          }
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <React.Fragment className="App">
          <div className={cssClass.header}>
            <Header />
          </div>
          <div className="body">
            {/* Start Carousel  */}
            <div className="">
            <Carousel autoplay >
              {this.state.items.map(item => (
                <Link to={`products/women/${item.link}`}>
                <img src={item.url} alt={item.title} height="1200px" width="100%"/>
                </Link>
              ))}
            </Carousel>
            </div>
              {/* end Carousel  */}
            <MenuItem />
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
}
export default Home;

///////////////////////Styling//////////////////
