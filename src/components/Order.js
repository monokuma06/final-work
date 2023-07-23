import React, { Component } from 'react'
import {Fix} from 'react-icons'

export class Order extends Component {
  render() {
    return (
      <div className= 'allItem'>
        <div className='item'>
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <h3>{this.props.item.age}</h3>
        <div className='btn'>
        {/* <button className='add-to-card' onClick={() => this.props.onPeges(this.props.item)} >Читать</button> */}
        <button className='Add-card-to' onClick={() => this.props.onDelete(this.props.item.id)}> Удалить</button>
        </div>
      </div>
      </div>
    )
  }
}

export default Order
