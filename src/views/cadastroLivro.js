import React, { Component } from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

export class cadastroLivro extends Component {

  state = {
    titulo: '',
    categoria: '',
    autor: {
      nome: ''
    }
  }

  cadastrar = () => {
    axios
      .post('http://localhost:8080/api/livros', {
        titulo: this.state.titulo,
        categoria: this.state.categoria,
        autor: {
          nome: this.state.autor.nome,
        }
      }).then(response => {
        console.log(response)
      }).catch(erro => {
        console.log(erro.response);
      })
  }


  backToLogin = () => {
    this.props.history.push('/login')
  }

  render() {
    return (

      <Card title="Cadastro de Livros">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">

              <FormGroup label="Titulo: *" htmlFor="inputTitulo">
                <input type="text" id="inputTitulo" name="titulo"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ titulo: e.target.value })
                  }} />
              </FormGroup>

              <FormGroup label="Categoria: *" htmlFor="inputCategoria">
                <input type="text" id="inputCategoria" name="categoria"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ categoria: e.target.value })
                  }} />
              </FormGroup>

              <FormGroup label="Autor: *" htmlFor="inputAutor">
                <input type="text" id="inputAutor" name="autor"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ autor: {...this.state.autor, nome: e.target.value} })
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

export default withRouter(cadastroLivro);
