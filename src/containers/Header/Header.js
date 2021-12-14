import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { titulo, subtitulo } = this.props;

        return (
            <header className="header">
                <h1 className="titulo">{titulo}</h1>
                <h3>{subtitulo}</h3>
            </header>
        );
    }
}

export default Header;