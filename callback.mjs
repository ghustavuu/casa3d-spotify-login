import {tabletReturn} from './target.mjs';
const hadReturn=Boolean(location.search);
let destination;try{destination=tabletReturn(location.search);}catch{}
history.replaceState(null,'',location.pathname);
const message=document.querySelector('#message'),button=document.querySelector('#finish');
if(destination){message.textContent='A autorização do Spotify está pronta. Toque abaixo para enviá-la diretamente ao seu tablet.';button.href=destination;button.hidden=false;}else message.textContent=hadReturn?'Não foi possível concluir esta autorização. Gere um novo QR no Casa 3D e tente novamente.':'Para conectar, abra Spotify Connect no Casa 3D e leia o QR com o celular.';
