import React from 'react';
import AppConsumer from '../context/AppConsumer';
import { menuItems } from '../../menuItems';
import './styles.css';

class Toolbar extends React.Component {

  render() {
    return (
      <div className='toolbar'>
        <div className='menu'>
          {
            menuItems.map((item, idx) => (
                  <button
                      key={idx}
                      onClick={() => { this.props.go(item.menu); }}
                      className={this.props.route === item.label ? 'active' : ''}
                  >
                    {item.label}
                  </button>
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default AppConsumer(Toolbar);
