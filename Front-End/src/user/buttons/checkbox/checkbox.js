import React, { Component } from "react";
import checkboxStyle from  "./checkbox.module.css";

export default class Checkbox extends Component {
  render() {
    const { label, count, checkClick, value, onchange } = this.props;
    return (
      <div className="pl-2">
        <section className={checkboxStyle.container}>
          <label className=''>
            <input type='checkbox' value={value} onChange={onchange} />  
             <div className={checkboxStyle.label}>
              {label}
            </div>
            <br />
            <span
              className={checkboxStyle.checkmark}
              // onClick={checkClick}
            ></span>
          </label>
        </section>
      </div>
    );
  }
}
