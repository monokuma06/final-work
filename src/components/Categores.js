import React, { Component } from 'react'

export class Categores extends Component {
    constructor(props) {
        super(props)
        this.state ={
            Age:[
                {
                    key: 'all',
                    age: 'Все'
                },
                {
                    key: '14+',
                    age: '14+'
                },
                {
                    key: '16+',
                    age: '16+'
                },
                {
                    key: '18+',
                    age: '18+'
                },
            ]
        }
    }
  render() {
    return (
      <div className='Age'>
        {this.state.Age.map(el => (
            <div key={el.key} onClick={() => this.props.chooseAge(el.key) }> {el.age} </div>
        ))}
      </div>
    )
  }
}

export default Categores

