import React, { useState } from 'react';

const Guia = () => {
    const [guide, setGuide] = useState(
        'Gabriel Stedile'
    );

    return (

        <div className='preview'>
            <h1>Formulário para Contração de Guia</h1>

            <h1 style={{marginBottom: 0}}> Selecione um Guia: </h1>
            <div className='center'>
                <select value={guide} onChange={ event => setGuide(event.target.value) }>
                    <option value="Gabriel Stedile"> Gabriel Stedile </option>
                    <option value="Laís Ferrigo Perazzolo"> Laís Ferrigo Perazzolo </option>
                </select>
            </div>

            <h1 style={{marginTop: '30px'}}> Valor do Guia: R$ 450,50</h1>

            <div style={{marginTop: '40px'}} className='center'>
                <button > Comprar </button>
            </div>

        </div>
    );
} ;
export default Guia;