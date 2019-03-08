import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

import './main.css';
library.add(faEye, faArrowCircleRight, faArrowCircleLeft)

export default class Main extends Component {

    state = {
        pessoas: [],
        skip: 0,
    }

    componentDidMount() {
        this.loadPessoas();
    }

    loadPessoas = async (pagina = 0) => {
        const result = await api.get(`/pessoas?skip=${pagina}&limit=20`);

        this.setState({ pessoas: result.data, skip: pagina });
    }

    paginaAnterior = () => {
        const { skip } = this.state;

        if (skip === 0) return;

        const paginaSkip = skip - 20;
        this.loadPessoas(paginaSkip);
    }

    proximaPagina = () => {
        const { pessoas, skip } = this.state;

        if (pessoas.length < 20 || pessoas.length === 0) return;

        const paginaSkip = skip + 20;
        this.loadPessoas(paginaSkip);
    }

    render() {
        const { pessoas, skip } = this.state

        return (
            <div className="pessoas-list">
                {pessoas.map(pessoas => (
                    <article key={pessoas._id}>
                        <img src="https://randomuser.me/api/portraits/thumb/women/60.jpg" />
                        <div>
                            <strong>{pessoas.nome}</strong>
                            {/* 
                            <p>{pessoas.endereco}< br />
                                {pessoas.telefone}</p> 
                                */}
                        </div>

                        <Link to={`/pessoas/${pessoas._id}`}><FontAwesomeIcon icon="eye" /></Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={skip === 0} onClick={this.paginaAnterior}><FontAwesomeIcon icon="arrow-circle-left" /></button>
                    <button disabled={pessoas.length < 20 || pessoas.length === 0} onClick={this.proximaPagina}><FontAwesomeIcon icon="arrow-circle-right" /></button>
                </div>
            </div>
        );
    }
}