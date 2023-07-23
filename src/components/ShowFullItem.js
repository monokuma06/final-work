import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='OpenAddCard'>
        <div>
             <img src={"./img/" + this.props.item.img}  onClick={() => this.props.onShowItem(this.props.item)} />
             <h2>{this.props.item.title}</h2>
             <h4>{this.props.item.author}</h4>
             <h4>{this.props.item.year}</h4>
             <h6>{this.props.item.genre}</h6>
             <h6>{this.props.item.publishin}</h6>
             <h3>{this.props.item.age}</h3>
             <h5>{this.props.item.loaded}</h5>
             <h5>{this.props.item.total}</h5>
             <p>{this.props.item.information}</p> 
        <div className='btn'>
        <button className='addtocard' onClick={() => this.props.onPeges(this.props.item)} > Читать </button>
        <button onClick={() => this.props.onShowItem(this.props.item)} className='Addcard'>Выйти</button>
        </div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem
