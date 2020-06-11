import React, { Component } from "react";
import RadioStyle from "./radio.module.css";
export default class Radio extends Component {
    render() {
        const { label, value, onchange, checked } = this.props;
        return (
            <div className="pl-2">
                    <section className={RadioStyle.container}>
                        <label className={RadioStyle.checkbox}>
                            <input
                                type='radio'
                                name='discount'
                                onChange={onchange}
                                value={value}
                                checked={checked}
                            />
                            <div className={RadioStyle.label}>
                                {label}
                            </div>
                            <span className={RadioStyle.radiomark}></span>
                        </label>
                    </section>
            </div>
        );
    }
}
