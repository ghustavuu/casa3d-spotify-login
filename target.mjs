// Public static OAuth return page. No account tokens or client secret are handled here.
export function tabletReturn(search){
 const params=new URLSearchParams(search),code=params.get('code'),state=params.get('state');
 if(params.has('error')||!code||code.length>4096||!state||state.length>2048)throw Error('Authorization was not completed.');
 let data;try{const decoded=atob(state.replace(/-/g,'+').replace(/_/g,'/'));data=JSON.parse(decoded);}catch{throw Error('Invalid pairing.');}
 const parts=typeof data.host==='string'?data.host.split('.').map(Number):[];
 const valid=parts.length===4&&parts.every((n,i)=>Number.isInteger(n)&&n>=0&&n<=255&&String(n)===data.host.split('.')[i]);
 const privateIP=valid&&(parts[0]===10||parts[0]===192&&parts[1]===168||parts[0]===172&&parts[1]>=16&&parts[1]<=31);
 if(data.v!==1||!privateIP||data.port!==8765||typeof data.nonce!=='string'||!/^[a-f0-9]{48}$/.test(data.nonce))throw Error('Invalid tablet address.');
 const target=new URL(`http://${data.host}:8765/spotify/callback`);target.searchParams.set('code',code);target.searchParams.set('state',state);return target.href;
}
