import React, { Component } from 'react';
import axios from '../../../../../axiosConfig';
import { Button } from '@material-ui/core';
// import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
class ItemOne extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        this.getAllData();
    }
    getAllData = (event) => {
        // event.preventDefault();
        axios.get('inventory')
            .then(res => {
                console.log(res.data)
                this.setState({
                    data: res.data
                })
            })
            .catch(function (res) {
                console.log(res);
            });
    }
    render() {
        const data = this.state.data;
        for (const dd of data) {
            console.log(dd)
        }
        return (
            <div className="App">
                <div className="row no-gutters text-center border">
                    <div className="col-sm-2 p-2 border-right"> Product Id</div>
                    <div className="col-sm-2 p-2 border-right"> Brand Name</div>
                    <div className="col-sm-2 p-2 border-right">Product Title</div>
                    <div className="col-sm-2 p-2 border-right"> Seller Email</div>
                    <div className="col-sm-4 p-2 bg-orange">
                        <div className="row no-gutters">
                            <div className="col-sm-4">Product Status</div>
                            <div className="col-sm-4">Product View</div>
                            <div className="col-sm-4 ">Product Delete</div>
                        </div>
                    </div>
                    {/* <div className="col-sm-2 border-right"> Product Status</div>
                    <div className="col-sm-2"> Product Delete</div> */}
                </div><br />
                {data.map(item => (
                    <div className="row no-gutters text-center font-weight-bold" style={{ fontSize: '12px' }}>
                        <div className="col-sm-2 pt-2 border border-right-0">{item._id}</div>
                        <div className="col-sm-2 pt-2 border border-right-0">{item.brandName}</div>
                        <div className="col-sm-2 p-1 border border-right-0">{item.productTitle}</div>
                        <div className="col-sm-2 pt-2 border">{item.sellerEmail}</div>
                        <div className="col-sm-4 pl-0">
                        <div className="row no-gutters">
                            <div className="col-sm-4 p-1 border border-right-0 border-left-0">
                            <Button className="w-100 m-0 rounded-0" variant="contained" color="primary">{item.status}</Button>
                            </div>
                            <div className="col-sm-4 p-1 border border-right-0">
                            <Button className="w-100 m-0 rounded-0" variant="contained" color="primary">View</Button>
                            </div>
                            <div className="col-sm-4 p-1 border">
                            <Button className="w-100 m-0 rounded-0" variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ItemOne;