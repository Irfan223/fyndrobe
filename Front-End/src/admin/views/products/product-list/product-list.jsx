import React, { Component } from 'react';
import customStyle from './product-list.module.css';
const Tab = React.lazy(() => import('./tab'));
class ProductList extends Component {
    state = { 
        value: 0
     }
     onChange = (event, value) => {
        console.log(value);
        this.setState({
            value: value
        })
    }
    render() { 
        return ( 
            <div className="App bg-white">
                <Tab value={this.state.value} onChange={this.onChange} />
                {/* <div>Product List</div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6">
Hi
                        </div>
                         <div className="col-12 col-sm-6">
Hello
                         </div>
                    </div>
                </div> */}
            </div>
         );
    }
}
 
export default ProductList;