import {tabletReturn} from './target.mjs';
let destination;try{destination=tabletReturn(location.search);}catch{}
history.replaceState(null,'',location.pathname);
const message=document.querySelector('#message'),button=document.querySelector('#finish');
if(destination){message.textContent='A autorizacao do Spotify esta pronta. Toque abaixo para envia-la diretamente ao seu tablet.';button.href=destination;button.hidden=false;}else message.textContent='Nao foi possivel concluir esta autorizacao. Gere um novo QR code no Casa 3D e tente novamente.';
