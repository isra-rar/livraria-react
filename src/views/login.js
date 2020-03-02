import React, { Component } from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom';

export class Login extends Component {

    state = {
        email: '',
        senha: ''
    }


    entrar = () => {
        
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuario')
    }

    render() {
        return (
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: 300 }}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <form>
                                                <fieldset>
                                                    <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                        <input type="email" className="form-control" 
                                                        value={this.state.email}
                                                        onChange={(e) => this.setState({email: e.target.value})}
                                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email" />
                                                    </FormGroup>
                                                    <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                        <input type="password" className="form-control" 
                                                        value={this.state.senha}
                                                        onChange={(e) => this.setState({senha: e.target.value})}
                                                        id="exampleInputPassword1" placeholder="Password" />
                                                    </FormGroup>

                                                    <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                                    <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>

                                                </fieldset></form></div>
                                    </div></div>

                            </Card>

                        </div>
                    </div>
                </div>


          
        );
    }
}

export default withRouter( Login );
