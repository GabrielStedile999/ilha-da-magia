import React from 'react';
import { translate } from 'react-i18next';
import ilhacampeche from './ilhacampeche.jpg';
import Common from '../Common';

const IhaCampeche = ({ t }) => (
  <Common
      t={t}
      photo={ilhacampeche}
      name='ilhacampeche' />
);

export default translate('common')(IhaCampeche);
