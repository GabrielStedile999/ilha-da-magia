import React from 'react';
import AppConsumer from '../context/AppConsumer';
import Home from '../Home';
import SantoAntonioLisboa from '../places/SantoAntonioLisboa';
import CostaLagoaConceicao from '../places/CostaLagoaConceicao';
import IlhaCampeche from '../places/IlhaCampeche';
import DunasJoaquina from '../places/DunasJoaquina';
import LagoaPeri from '../places/LagoaPeri';

const elements = { Home, SantoAntonioLisboa, CostaLagoaConceicao, IlhaCampeche, DunasJoaquina, LagoaPeri };

const Router = ({ route }) => (
        React.createElement(elements[route])
    );

export default AppConsumer(Router);