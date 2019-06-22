import React from 'react';

const Common = ({ t, photo, name }) => (
  <div className='preview'>
    <h2>{t(`places.${name}.title`)}</h2>
    <figure>
      <img src={photo} alt={t(`places.${name}.figure.alt`)} />
      <figcaption>{t(`places.${name}.figure.credits`)}</figcaption>
    </figure>
    <p>{t(`places.${name}.content`)}</p>
  </div>
);

export default Common;