import React, { Component } from "react";
import { Drawer, Button } from "antd";
import {MenuOutlined } from "@ant-design/icons";
import customStyle from './drawer.module.css';
const AccordionComponent = React.lazy(() => import('../accordion/accordion'));
export default class DrawerMenu extends Component {
  state = { visible: false, placement: "left" };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <>
      {!visible ? (
          <Button onClick={this.showDrawer} className={customStyle.button}>
            <MenuOutlined className={customStyle.bars} />
          </Button>
        ) : (
          <div></div>
        )}
        <Drawer
          title="Basic Drawer"
          width="80%"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          getContainer={false}
          style={{ position: 'realative' }}
          key={placement}
        >
       <div><AccordionComponent/></div>
        </Drawer>
      </>
    );
  }
}
