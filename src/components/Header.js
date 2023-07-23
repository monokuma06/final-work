import React, { useState } from 'react';
import Order from './Order';

const showOrders = (props) => {
    return (
        <div>
            {props.orders.map(el => (
                    <Order onDelete={props.onDelete} key={el.id} item={el} />
                ))}
        </div>
    )
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>Нет добавлений</h2>
    </div>)
}

export default function Header(props) {
    let [cardOpen, setCardOpen] = useState(false);
  
    return (
      <header>
        <div>
          <span className='logo'>RanobeFake</span>
          {/* <ul className='nav'>
            <li>Для вас</li>
            <li>Популярное</li>
            <li>Недавно обновленные</li>
          </ul> */}
          <button onClick={() => setCardOpen(!cardOpen)} className={`icons ${cardOpen && 'active'}`}>избранное</button>
  
          {cardOpen && (
            <div className='iconsOpen'>
                {props.orders.length > 0 ?
                   showOrders(props) : showNothing()}
            </div>
          )}
        </div>
        <div className='presentation'></div>
      </header>
    );
  }
  