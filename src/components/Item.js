import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{this.props.item.title}</h2>
            <h4>{this.props.item.author}</h4>
            <h4>{this.props.item.year}</h4>
            <h6>{this.props.item.genre}</h6>
            <h6>{this.props.item.publishin}</h6>
            <h3>{this.props.item.age}</h3>
            <div className='btn'>
            <button className='add-to-cards' onClick={() => this.props.onPeges(this.props.item)} > Читать </button>
            <button onClick={() => this.props.onShowItem(this.props.item)} className='add-cards'>Подробнее</button>
            </div>
            
            {/* <h6>{this.props.item.loaded}</h6>
            <h6>{this.props.item.total}</h6> */}
            {/* <p>{this.props.item.information}</p> */}
        </div>
    )
  }
}

export default Item
