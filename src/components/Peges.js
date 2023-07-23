import React, { Component } from 'react'

export class Peges extends Component {
  render() {
    return (
      <div className='OpenAddCart'>
        <div className='item'>
        <img src={"./imege/" + this.props.item.pages} onClick={() => this.props.onPeges(this.props.item)} />
        <button className="add-to-card" onClick={() => this.props.onAdd(this.props.item)} > Добавить в избранное</button>
        </div>
      </div>
    )
  }
}

export default Peges

