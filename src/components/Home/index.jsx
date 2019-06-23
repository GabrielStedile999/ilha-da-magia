import React from 'react';
import hercilioluz from './hercilioluz.jpeg';

const Home = () => (
  <div className='preview'>
    <h1>Ponte Hercílio Luz</h1>
    <div>
      <figure className='center'>
        <img
            id='hercilioluz'
            src={hercilioluz}
            alt={'Foto da Ponte Hercílio Luz'} />
      </figure>
    </div>
    <p className='center'>A Ponte Hercílio Luz está localizada em Florianópolis, no estado brasileiro de Santa Catarina. A ponte foi construída com o objetivo de ligar a parte insular da capital do estado, na ilha de Santa Catarina, à sua parte continental, visando substituir o antigo serviço de ligação por balsas</p>
  </div>
);

export default Home;