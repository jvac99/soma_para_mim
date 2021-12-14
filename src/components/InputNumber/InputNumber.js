import React, { Component } from 'react';
import './InputNumber.css';

class InputNumber extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { texto, onChange } = this.props;

        return (
            <input type="number" className="inputNumber" placeholder={texto} required onChange={onChange} />
        );
    }
}

export default InputNumber;