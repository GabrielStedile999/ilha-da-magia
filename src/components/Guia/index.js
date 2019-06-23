import React, { useState } from 'react';
import {translate} from "react-i18next";

const Guia = ({ t }) => {
    const [currency, setCurrency] = useState(
        'BRL'
    );
    const [guide, setGuide] = useState(
        'Gabriel Stedile'
    );
    const [locale, setLocale] = useState(
        'pt-BR'
    );
    let number = locale === 'pt-BR' ? 450.50 : 450.50/4;
    let price = new Intl.NumberFormat(locale,
        { style: 'currency', currency: currency }).format(number);

    return (

        <div className='preview'>
            <h1>{t('guia.title')}</h1>

            <h1 style={{marginBottom: 0}}> {t('guia.selectGuide')}: </h1>
            <div className='center'>
                <select value={guide} onChange={ event => setGuide(event.target.value) }>
                    <option value="Gabriel Stedile"> Gabriel Stedile </option>
                    <option value="Laís Ferrigo Perazzolo"> Laís Ferrigo Perazzolo </option>
                </select>
            </div>

            <h1 style={{marginTop: '30px'}}> {t('guia.priceGuide')}: {price}</h1>

            <h1 style={{marginBottom: 0}}> {t('guia.currencyPayment')}:</h1>
            <div className='center'>
                <select value={currency} onChange={ event => {
                    setCurrency(event.target.value);
                    if(event.target.value === 'USD') {
                        setLocale('en-US')
                    } else if(event.target.value === 'BRL') {
                        setLocale('pt-BR')
                    }} }>
                    <option value="BRL"> {t('guia.brcurrency')} </option>
                    <option value="USD"> {t('guia.eucurrency')} </option>
                </select>
            </div>

            <div style={{marginTop: '40px'}} className='center'>
                <button > {t('guia.button')} </button>
            </div>

        </div>
    );
} ;
export default translate('common')(Guia);