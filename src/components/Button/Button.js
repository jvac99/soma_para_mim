import React from 'react';
import './Button.css';

export default class Button extends React.Component {
    render() {
        const { type, valor } = this.props;
        return (
            <button className='button' type={type} onClick={this.handleClick} onSubmit={this.handleSubmit}>
                {valor}
            </button>
        );
    }
}