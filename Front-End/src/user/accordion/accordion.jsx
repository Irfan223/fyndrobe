import React, { Component } from "react";
import { Collapse, Select } from "antd";
import {Link} from 'react-router-dom';
import customStyle from './accordion.module.css';
import { Divider } from "@material-ui/core";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

class AccordionComponent extends Component {
  state = {
    expandIconPosition: "right",
    bordered: false
  };

  onPositionChange = (expandIconPosition) => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
    return (
      <div>
        <Collapse className="p-0 m-0"
          onChange={callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel header="MENS" key="1">
            {/* <div>{text}</div> */}
          </Panel>
          <Panel header="WOMENS" key="2">
            <div>
              <Link to="/products/women/Kurta" className={customStyle.linkStyle}>Kurtas</Link>
            </div>
            <div>
              <Link to="/products/women/Kurta-with-leggins" className={customStyle.linkStyle}>Kurta-with-leggins</Link>
            </div>
            <div>
              <Link to="/products/women/Kurta-with-dupatta" className={customStyle.linkStyle}>Kurta-with-dupatta</Link>
            </div>
            <div>
              <Link to="/products/women/Dupattas-and-Shawls" className={customStyle.linkStyle}>Dupattas and Shawls</Link>
            </div>
          </Panel>
          <Panel header="KIDS" key="3">
            {/* <div>{text}</div> */}
          </Panel>
          <Panel header="ACCESORIES" key="4">
            {/* <div>{text}</div> */}
          </Panel>
          <Panel header="My Account" key="5">
             <Link to="/login" className={customStyle.linkStyle}>
                 Login
             </Link>
          </Panel>
        </Collapse>
        <br />
      </div>
    );
  }
}
export default AccordionComponent;
