import React from 'react'
import ReactDOM from 'react-dom'
import BaseComponent from './components/BaseComponent'
import HandlerComponent from './components/HandlerComponent'


ReactDOM.render(
  <div>
    <HandlerComponent initialValue = 'a' />
    <BaseComponent initialValue = {10} />
  </div>
  , document.getElementById('app'))
