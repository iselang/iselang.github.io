(function(){
  const path=(inTo=null,state={})=>{if(inTo===null)return window.location.pathname;window.history.pushState(state,"",inTo);window.dispatchEvent(newEvent("pathchange"));};
path.load=(name)=>{let head=document.head||document.querySelector("head");if(!head){console.error("No <head> found!");return;}let preload=document.createElement("link");Object.assign(preload,{rel:"preload",as:"script",href:name});head.append(preload);}
path.go = _pTr => window.location.href = _pTr;
intL06598 = ['\x69','\x6e','\x6e','\x65','\x72','\x48','\x54','\x4d','\x4c'];  

ihdid75037dpsh = (fwui, gsgo) => { 
fwui[intL06598.join('')] = gsgo; 
};
suPelJR=['tap','section','ask','nav','part','row','say','see','i',"ask", "nav", "task", 
"preview", "slide",
"cont", "card", "layout",
"item", "row", "say", 
 "slide", "tab"];
path.open = (name, trg) => {
let target = trg ? pick(trg) : pick('path');
if (!target) return;

fetch(name)
.then(response => response.text())
.then(html => {
target.style.opacity = 0; 

let snHtm = new DOMParser().parseFromString(html, 'text/html');
snHtm.querySelectorAll('style, script').forEach(el => el.remove());

let AlT03jkh = new Set(suPelJR);

snHtm.body.querySelectorAll('*').forEach(el => {
if (!AlT03jkh.has(el.tagName.toLowerCase())) {
el.remove();
} else {
Array.from(el.attributes).forEach(attr => {
if (/^on/i.test(attr.name) || attr.name === 'style') { 
el.removeAttribute(attr.name);
}
});
}
});

target.replaceChildren();
ihdid75037dpsh(target, snHtm.body[intL06598.join('')]);

setTimeout(() => {
AutoUI();
func();
target.style.transition = "opacity 0.5s"; 
target.style.opacity = 1; 
}, 100);

setTimeout(() => {
AutoUI();
func();
target.style.transition = "opacity 0.5s"; 
target.style.opacity = 1; 
}, 500);
setTimeout(() => {
AutoUI();
func();
target.style.transition = "opacity 0.5s"; 
target.style.opacity = 1; 
}, 1000);
});
};


path?(window.path=path):'';
})();
