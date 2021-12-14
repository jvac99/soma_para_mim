import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {

        const { titulo, descricao } = this.props;

        return (
            <header className="header">
                <h1 className="titulo">{titulo}</h1>
                <h3>{descricao}</h3>
            </header>
        );
    }
}