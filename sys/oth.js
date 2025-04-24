(function(){
const copy=(_kh3)=>{window.focus();navigator.clipboard.writeText(_kh3)}
const uuid=function(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16);});}
const ran=function(n){return Math.floor(Math.random() *n)}
copy?(window.copy=copy):'';
uuid?(window.uuid=uuid):'';
ran?(window.ran=ran):'';

const pop=()=>{};
pop.up=(enstO)=>{window.open(enstO, "_blank","width=700,height=600,noopener,noreferrer");}
pop?(window.pop = pop):'';
})();