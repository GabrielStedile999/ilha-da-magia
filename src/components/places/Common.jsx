import React from 'react';

const Common = ({ title, alt, credits, content, photo}) => (
  <div className='preview'>
    <h2>{title}</h2>
    <figure>
      <img src={photo} alt={alt} />
      <figcaption>{credits}</figcaption>
    </figure>
    <p>{content}</p>
  </div>
);

export default Common;