import React, { Component } from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

export class cadastroUsuario extends Component {


  state = {
    nome: '',
    cpf: '',
    email: '',
    sexo: ''
  }
  // state = {
  //   nome: '',
  //   cpf: '',
  //   email: '',
  //   sexo: '',
  //   endereco: [{
  //     logradouro: '',
  //     numero: '',
  //     bairro: '',
  //     cep: '',
  //   }]
  // }

  cadastrar = () => {
    axios
      .post('http://localhost:8080/api/clientes', {
        nome: this.state.nome,
        cpf: this.state.cpf,
        email: this.state.email,
        sexo: this.state.sexo        
      }).then(response => {
        console.log(response)
      }).catch(erro => {
        console.log(erro.response);
      })
  }

  // cadastrar = () => {
  //   axios
  //     .post('http://localhost:8080/api/clientes', {
  //       nome: this.state.nome,
  //       cpf: this.state.cpf,
  //       email: this.state.email,
  //       sexo: this.state.sexo,
  //       endereco: [{
  //         logradouro: this.endereco.logradouro,
  //         numero: this.endereco.numero,
  //         bairro: this.endereco.bairro,
  //         cep: this.endereco.cep,
  //       }]
  //     }).then(response => {
  //       console.log(response)
  //     }).catch(erro => {
  //       console.log(erro.response);
  //     })
  // }


  backToLogin = () => {
    this.props.history.push('/login')
  }

  render() {
    return (

      <Card title="Cadastro de Usuario">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">

              <FormGroup label="Nome: *" htmlFor="inputNome">
                <input type="text" id="inputNome" name="nome"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ nome: e.target.value })
                  }} />
              </FormGroup>

              <FormGroup label="CPF: *" htmlFor="inputCPF">
                <input type="text" id="inputCPF" name="cpf"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ cpf: e.target.value })
                  }} />
              </FormGroup>

              <FormGroup label="Email: *" htmlFor="inputEmail">
                <input type="text" id="inputEmail" name="email"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ email: e.target.value })
                  }} />
              </FormGroup>

              <FormGroup label="Sexo: *" htmlFor="inputSexo">
                <input type="text" id="inputSexo" name="sexo"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ sexo: e.target.value })
                  }} />
              </FormGroup>

              <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
              <button onClick={this.backToLogin} className="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </div>
      </Card>


    );
  }
}

export default withRouter(cadastroUsuario);
