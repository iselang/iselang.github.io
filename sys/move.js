(function(){

const move = (etl, mot) => {
pick(etl).put(pick(mot));
};
move.up = function(sel) {
const el = pick(sel);         
const ps = el.previousElementSibling;  
if (ps) {
el.parentNode.insertBefore(el, ps);  
}
};
move.down = function(sel) {
const el = pick(sel);         
const ns = el.nextElementSibling;    
if (ns) {
el.parentNode.insertBefore(el, ns.nextElementSibling); 
}
};

move?(window.move=move):'';
})();