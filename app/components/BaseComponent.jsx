import React, { Component } from 'react'

export default class BaseComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { value: props.initialValue }
  }

  sum(delta) {
    this.setState({ ...this.state, value: this.state.value + delta })
  }

  render() {
    return (
      <div>
        <h1>Componente de classe</h1>
        <p>Valor do Paramentro <strong>{this.state.value}</strong></p>
        <button onClick={() => this.sum(-1)}> Decrementar </button>
        <button onClick={() => this.sum(1)}> Incrementar </button>
      </div>
    )
  }
}
