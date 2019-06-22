import React from 'react';
import { translate } from 'react-i18next';
import photo from './dunasjoaquina.jpg';
import Common from '../Common';

const DunasJoaquina = ({ t }) => (
  <Common
      t={t}
      photo={photo}
      name='dunasjoaquina' />
);

export default translate('common')(DunasJoaquina);
