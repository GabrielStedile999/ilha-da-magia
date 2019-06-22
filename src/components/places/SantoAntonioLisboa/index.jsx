import React from 'react';
import { translate } from 'react-i18next';
import santoantioniolisboa from './santoantioniolisboa.jpg';
import Common from '../Common';

const SantoAntonioLisboa = ({ t }) => (
  <Common
      t={t}
      photo={santoantioniolisboa}
      name='santoantoniolisboa' />
);

export default translate('common')(SantoAntonioLisboa);
