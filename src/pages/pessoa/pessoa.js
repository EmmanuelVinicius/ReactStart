import React, { Component } from 'react';
import api from './../../services/api';
import './pessoa.css';

export default class Pessoa extends Component {
    state = {
        pessoa: {},
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const result = await api.get(`/pessoas/${id}`);

        this.setState({ pessoa: result.data })
    }
    render() {
        const { pessoa } = this.state;
        return (
            <div className="pessoa-info">
                <h1>{pessoa.nome}</h1>
                <p>{pessoa.telefone}<br />
                    <b>Endereço:</b> {pessoa.endereco}<br />
                    <b>Departamento:</b> {pessoa.departamento}</p>
            </div>
        );
    }
}