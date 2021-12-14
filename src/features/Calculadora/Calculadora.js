import React from 'react';
import './Calculadora.css';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import InputNumber from '../../components/InputNumber/InputNumber';

export default class Calculadora extends React.Component {
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
                        titulo="Soma para mim"
                    />
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label className="valor">
                                {this.state.result}
                            </label>
                        </div>
                        <InputNumber onChange={this.onChange1} />
                        <InputNumber onChange={this.onChange2} />
                        <Button valor="+" type="submit" onSubmit={this.handleSubmit} />
                    </form>
                </div>
            </div>
        );
    }
}