import React from 'react';
import { translate } from 'react-i18next';
import costalagoaconceicao from './costalagoaconceicao.jpg';
import Common from '../Common';

const CostaLagoaConceicao = ({ t }) => (
  <Common
      t={t}
      photo={costalagoaconceicao}
      name='costalagoaconceicao' />
);

export default translate('common')(CostaLagoaConceicao);
