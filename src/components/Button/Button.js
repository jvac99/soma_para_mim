import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { tipo, valor, click, enviar } = this.props;
        return (
            <button className='button' type={tipo} onClick={click} onSubmit={enviar}>
                {valor}
            </button>
        );
    }
}

export default Button;