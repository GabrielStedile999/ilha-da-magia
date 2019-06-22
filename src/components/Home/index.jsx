import React from 'react';
import { translate } from 'react-i18next';
import hercilioluz from './hercilioluz.jpeg';

// t -> alias para traduzir os dados do locale
const Home = ({ t }) => (
  <div className='preview'>
    <h1>{t('home.title')}</h1>
    <div>
      <figure className='center'>
        <img
            id={t('home.figure.id')}
            src={hercilioluz}
            alt={t('home.figure.alt')} />
      </figure>
    </div>
    <p className='center'>{t('home.content')}</p>
  </div>
);

export default translate('common')(Home);