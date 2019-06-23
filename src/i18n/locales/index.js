import pt from './default.json';
import en from './default.en.json';
import homePt from '../../components/Home/locales/default.json';
import homeEn from '../../components/Home/locales/default.en.json';
import santoAntonioLisboaPt from '../../components/places/SantoAntonioLisboa/locales/default.json';
import santoAntonioLisboaEn from '../../components/places/SantoAntonioLisboa/locales/default.en.json';
import costaLagoaConceicaoPt from '../../components/places/CostaLagoaConceicao/locales/default.json';
import costaLagoaConceicaoEn from '../../components/places/CostaLagoaConceicao/locales/default.en.json';
import ilhaCampechePt from '../../components/places/IlhaCampeche/locales/default.json';
import ilhaCampecheEn from '../../components/places/IlhaCampeche/locales/default.en.json';
import dunasJoaquinaPt from '../../components/places/DunasJoaquina/locales/default.json';
import dunasJoaquinaEn from '../../components/places/DunasJoaquina/locales/default.en.json';
import lagoaPeriPt from '../../components/places/LagoaPeri/locales/default.json';
import lagoaPeriEn from '../../components/places/LagoaPeri/locales/default.en.json';
import guiaPt from '../../components/Guia/locales/default.json';
import guiaEn from '../../components/Guia/locales/default.en.json';

pt['pt-BR'].home = homePt['pt-BR'];
pt['pt-BR'].places.santoantoniolisboa = santoAntonioLisboaPt;
pt['pt-BR'].places.costalagoaconceicao = costaLagoaConceicaoPt;
pt['pt-BR'].places.ilhacampeche = ilhaCampechePt;
pt['pt-BR'].places.dunasjoaquina = dunasJoaquinaPt;
pt['pt-BR'].places.lagoaperi = lagoaPeriPt;
pt['pt-BR'].guia = guiaPt['pt-BR'];
en['en'].home = homeEn['en'];
en['en'].places.santoantoniolisboa = santoAntonioLisboaEn;
en['en'].places.costalagoaconceicao = costaLagoaConceicaoEn;
en['en'].places.ilhacampeche = ilhaCampecheEn;
en['en'].places.dunasjoaquina = dunasJoaquinaEn;
en['en'].places.lagoaperi = lagoaPeriEn;
en['en'].guia = guiaEn['en'];

export {
  pt,
  en,
};
