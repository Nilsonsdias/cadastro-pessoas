export const digits = v => String(v).replace(/\D/g,'');
export const cpfFormat = v => digits(v).slice(0,11).replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');
export const phoneFormat = v => { const d=digits(v).slice(0,11); return d.length>10?d.replace(/^(\d{2})(\d{5})(\d{0,4})$/,'($1) $2-$3'):d.replace(/^(\d{2})(\d{4})(\d{0,4})$/,'($1) $2-$3'); };
export function validCpf(value) { const c=digits(value); if(!/^\d{11}$/.test(c)||/^(\d)\1{10}$/.test(c))return false; for(let n=9;n<11;n++){let sum=0;for(let i=0;i<n;i++)sum+=Number(c[i])*(n+1-i);let d=(sum*10)%11;if(d===10)d=0;if(d!==Number(c[n]))return false;}return true; }
export function monthDay(value){const m=/^(\d{2})\/(\d{2})$/.exec(value);if(!m)return null;const day=+m[1],month=+m[2];const dt=new Date(2000,month-1,day);return dt.getMonth()===month-1&&dt.getDate()===day?month*100+day:null;}
export function birthdayMatch(iso,type,month,start,end){const key=Number(iso.slice(5,7))*100+Number(iso.slice(8,10));if(type==='month')return Number(iso.slice(5,7))===Number(month);if(type==='range'){const a=monthDay(start),b=monthDay(end);if(a===null||b===null)return false;return a<=b?key>=a&&key<=b:key>=a||key<=b;}return true;}
export function validBirth(iso,today){if(!/^\d{4}-\d{2}-\d{2}$/.test(iso))return false;const [y,m,d]=iso.split('-').map(Number);const date=new Date(y,m-1,d);return y>=1900&&date.getFullYear()===y&&date.getMonth()===m-1&&date.getDate()===d&&iso<=today;}
export const csvCell = v => '"'+String(v??'').replace(/^[=+@\-\t\r]/,"'$&").replace(/"/g,'""')+'"';
