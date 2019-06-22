import React from 'react';
import { translate } from 'react-i18next';
import lagoaperi from './lagoaperi.jpg';
import Common from '../Common';

const LagoaPeri = ({ t }) => (
  <Common
      t={t}
      photo={lagoaperi}
      name='lagoaperi' />
);

export default translate('common')(LagoaPeri);
