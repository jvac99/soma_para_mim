import React, { Component } from 'react';
import './Calculadora.css';
import Header from '../../containers/Header/Header';
import Button from '../../components/Button/Button';
import InputNumber from '../../components/InputNumber/InputNumber';

const titulo = process.env.REACT_APP_TITULO

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
            result: 0
        };
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange1(event) {
        this.setState({ value1: event.target.value });
    }

    onChange2(event) {
        this.setState({ value2: event.target.value });
    }

    handleSubmit(event) {
        this.setState({ result: parseInt(this.state.value1) + parseInt(this.state.value2) });
        event.preventDefault();
    }

    render() {
        return (
            <div className="flex-box container-box">
                <div className="content-box">
                    <Header
                        titulo={titulo}
                    />
                    <form onSubmit={this.handleSubmit}>
                        <div className="valor">
                            <label>
                                {this.state.result}
                            </label>
                        </div>
                        <InputNumber onChange={this.onChange1} texto={"Número"} />
                        <InputNumber onChange={this.onChange2} texto={"Número"} />
                        <Button valor={"+"} tipo={"submit"} />
                    </form>
                </div>
            </div>
        );
    }
}

export default Calculadora;