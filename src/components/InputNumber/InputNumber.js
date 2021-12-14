import React from 'react';
import './InputNumber.css';

export default class InputNumber extends React.Component {
    render() {
        return (
            <input type="number" className="inputNumber" placeholder="Número" required onChange={this.props.onChange} />
        );
    }
}