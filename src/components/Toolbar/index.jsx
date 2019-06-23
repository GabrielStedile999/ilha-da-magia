import React from 'react';
import i18next from 'i18next';
import AppConsumer from '../context/AppConsumer';
import { menuItems } from '../../menuItems';
import './styles.css';
import * as dictionary from "../../dictionary";

class Toolbar extends React.Component {
  state = {
    lng: i18next.language,
    item6Label: dictionary.menuItems.ITEM_6
  };

  changeLanguage = (e) => {
    const lng = e.target.value;
    this.setState({ lng: lng }, () => {
      i18next.changeLanguage(lng);

      menuItems.map((item) => {
        if (item.menu === dictionary.menuItems.ITEM_ID_6) {
          console.log(i18next.language);
          console.log(item.label);
          if(i18next.language === 'pt' && item.label === 'Hire Guide') {
            this.setState({item6Label: 'Contratar Guia'})
          } else if(i18next.language === 'en' && item.label === 'Contratar Guia') {
            this.setState({item6Label: 'Hire Guide'})
          }
        }
      })
    });
  };

  render() {
    return (
      <div className='toolbar'>
        <div className='menu'>
          {
            menuItems.map((item, idx) =>
            {
              if(item.menu === dictionary.menuItems.ITEM_ID_6) {
                item.label = this.state.item6Label
              }
              return (
                  <button
                      key={idx}
                      onClick={() => { this.props.go(item.menu); }}
                      className={this.props.route === item.label ? 'active' : ''}
                  >
                    {item.label}
                  </button>
              )
            })
          }
        </div>
        <nav className='language'>
          <button
            className={this.state.lng === 'pt' ? 'pt active' : 'pt'}
            onClick={this.changeLanguage}
            value='pt'  
          />
          <button
            className={this.state.lng === 'en' ? 'en active' : 'en'}
            onClick={this.changeLanguage}
            value='en'
          />
        </nav>
      </div>
    );
  }
}

export default AppConsumer(Toolbar);
