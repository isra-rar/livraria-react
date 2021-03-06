import React, { Component } from 'react';

export class Home extends Component {

    state = {
        saldo: 0
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p className="lead">Esse é seu sistema de resumo de finanças.</p>
                    <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                    <hr className="my-4" />
                    <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#/cadastro-usuario"
                            role="button"><i className="fa fa-users" />  Cadastrar Cliente</a>
                        <a className="btn btn-danger btn-lg" href="#/cadastro-livro"
                            role="button"><i className="fa fa-users" />  Cadastrar Livro</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
