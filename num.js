// Hey i know this is online
/* 
My code is not about the coder
It is about the advancement it did.

github.com/iselang/num

Copyleft By NUM TEAM/ ISE TEAM
Copyright (C) 2023 ISE LANG
*/
(function(){

const pick=el=>document.querySelector(el||'body');
pick.all = (selector, callback) => {
const elements = selector ? document.querySelectorAll(selector) : []; 
if (callback) {
elements.forEach(callback); 
}
return elements; 
};

const make=rel=>{return document.createElement(rel||'body')};
  
make.file=(filename, filetype, data)=> {
const blob = new Blob([data], { type: filetype });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = filename;
a.click();
URL.revokeObjectURL(url);
};

const load=lin=>{
if(lin.includes("num/")){
let fil=lin.replace("num/","");
fil=fil.endsWith(".js")?fil.replace(/\.js$/,".min.js"):fil.endsWith(".css")?fil.replace(/\.css$/,".min.css"):fil;
lin=`https://cdn.jsdelivr.net/gh/iselang/iselang.github.io@main/${fil}`;
}
let typ=lin.endsWith(".js")?"script":lin.endsWith(".css")?"style":null;
if(!typ)return;
let hea=document.head;
["preload"].forEach(rel=>{
let pre=make("link");
pre.rel=rel;
pre.as=typ;
pre.href=lin;
hea.append(pre);
});
let el=make(typ==="script"?"script":"link");
el[typ==="script"?"src":"href"]=lin;
typ==="style"?(el.rel="stylesheet"):0;
el.onload=()=>console.log(`Loaded: ${lin}`);
hea.appendChild(el);
}
  
const path=(inTo=null,state={})=>{if(inTo===null)return window.location.pathname;window.history.pushState(state,"",inTo);window.dispatchEvent(newEvent("pathchange"));};
path.load=(name)=>{let head=document.head||document.querySelector("head");if(!head){console.error("No <head> found!");return;}let preload=document.createElement("link");Object.assign(preload,{rel:"preload",as:"script",href:name});head.append(preload);}
path.go = _pTr => window.location.href = _pTr;
let _sfht=['\x69', '\x6e', '\x6e', '\x65', '\x72', '\x48', '\x54', '\x4d', '\x4c'].join('');
let _sftx = ['\x69', '\x6e', '\x6e', '\x65', '\x72', '\x54', '\x65', '\x78', '\x74'].join('');
let _sftv=['\x76','\x61','\x6c','\x75','\x65'].join('');
const prot=Element.prototype;const hyper=HTMLElement.prototype;
let define=(name,descriptor,type)=>Object.defineProperty(type||prot,name,descriptor);
let setContent=function(h){if(typeof h==="string"){if(this[_sftv]!==undefined||this.tagName==="INPUT"||this.tagName==="TEXTAREA"){this[_sftv]=h;}else if(/[<>]/.test(h)){this[_sfht]=h;}else{this[_sftx]=h;}}else if(h?.op&&h?.val){if(h.op==="+="){this[_sftv]!==undefined?(this[_sftv]+=h.val):(this[_sftx]+=h.val);}else if(h.op==="-="){this[_sftv]!==undefined?(this[_sftv]=this[_sftv].replace(h.val,'')):(this[_sftx]=this[_sftx].replace(h.val,''));}}};
define("get",{get:function(){return this[_sftv]??this[_sftx]??this[_sfht]??"";}});
define("set",{set:setContent});

define('put',{set:function(Aps){this.append(Aps||'');}},hyper);
define("say",{set:function(h){this[_sftx]=h;}});
define("val",{get:function(){return this[_sftx];},set:function(h){this[_sftx]=h;}});
define('at',{set:function(atV){Array.isArray(atV)?atV.forEach(v=>this.at=v):atV.includes('=')?this.setAttribute(...atV.split('=').map(v=>v.replace(/"/g,'').trim())):this.setAttribute(atV,'');}},hyper);  
define('rem',{set:function(attr){(Array.isArray(attr)?attr:[attr]).forEach(a=>this.removeAttribute(a.trim()));}},hyper);

define("del",{get:function(){this.remove();}},hyper);

define("hide",{get:function(){this.setAttribute("hide","");this.style.display="none";}},hyper);
define("show",{get:function(){this.removeAttribute("hide");this.style.display="";if(this._func)this._func();}},hyper);
define("toggle",{get:function(){this.getAttribute("hide")!==null||this.style.display==="none"?(this.removeAttribute("hide"),this.style.display=""):(this.setAttribute("hide",""),this.style.display="none");}},hyper);

define("tap",{set:function(f){this.addEventListener("mousedown",f);this.addEventListener("touchstart",f);}});
define("ask",{set:function(f){this.oninput=()=>f(this.val);}});
define("do",{set:function(fn){(this._h0d2klh||=[]).push(fn);this._delay?setTimeout(fn,this._delay*1000):this._loop>0?(this._loopId||=setInterval(()=>this._h0d2klh.forEach(f=>f()),this._loop*1000)):fn();},get:function(){return this._h0d2klh||[];}});
define("delay",{set:function(time){this._delay=time;}});
define("loop",{set:function(time){if(this._loopId)clearInterval(this._loopId);time>0?(this._loop=time,this._loopId=setInterval(()=>this._h0d2klh?.forEach(f=>f()),time*1000)):(this._loop=0,this._loopId=null);}});

prot.at = function(attr, value) {
if (value === ''||!value) this.hasAttribute(attr) ? this.removeAttribute(attr) : this.setAttribute(attr, "")
else value ? this.setAttribute(attr, value) : this.removeAttribute(attr)
return this
}

prot.rem = function(name) {
this.removeAttribute(name||'');
};
prot.put = function (atrg) {
this.append(atrg||'');
};

Object.defineProperty(prot, 'text', {
get: function() {
return this.innerText;
},
set: function(value) {
this.innerText = value;
}
});



prot?(window.prot=prot):'';
prot.at?(window.at=prot.at):'';
prot.rem?(window.rem=prot.rem):'';
prot.put?(window.put=prot.put):'';
pick?(window.pick=pick):'';

make?(window.make=make):'';
load?(window.load=load):'';
path?(window.path=path):'';

pick.all('ask').forEach(el => el.hasAttribute('contenteditable') ? null : (el.at='contenteditable'));

const app = (...n) => {
document.title = n.join(" ");
};

app.cover = (...p) => {
let u = [
(p[0] == 1 && 'https://ise.web.app/cover/1.png'),
(p[0] == 2 && 'https://ise.web.app/cover/2.png'),
(p[0] == 3 && 'https://ise.web.app/cover/3.png'),
(p[0] == 4 && 'https://ise.web.app/cover/4.png'),
(p[0] == 5 && 'https://ise.web.app/cover/5.png'),
(p[0] == 6 && 'https://ise.web.app/cover/6.png'),
(p[0] == 7 && 'https://ise.web.app/cover/7.png')
].filter(Boolean)[0] || p[0];

const metaTags = [
{ property: 'og:image', content: u },
{ property: 'image', content: u },
{ property: 'og:image:width', content: '1200' },
{ property: 'og:image:height', content: '630' },
{ property: 'twitter:image', content: u }
];

metaTags.forEach(t => {
let meta = document.querySelector(`meta[property="${t.property}"]`);
if (meta) {
meta.setAttribute('content', t.content);
} else {
let _m = document.createElement('meta');
_m.setAttribute('property', t.property);
_m.setAttribute('content', t.content);
document.head.append(_m);
}
});
};

app.icon = (p) => {
let iconUrl = (typeof p === 'number' && p >= 1 && p <= 36) 
? `https://ise.web.app/fa/${p}.png` 
: p;

let link = document.querySelector('link[rel="shortcut icon"]');
if (link) {
link.href = iconUrl;
} else {
link = document.createElement('link');
link.rel = 'shortcut icon';
link.type = 'image/x-icon';
link.href = iconUrl;
document.head.append(link);
}
};
const fav=(pe)=>app.icon(pe);
app.key = (...k) => {
let metaK = document.querySelector('meta[name="keywords"]');
if (metaK) {
metaK.setAttribute('content', k.join(', '));
} else {
let meta = document.createElement('meta');
meta.setAttribute('name', 'keywords');
meta.setAttribute('content', k.join(', '));
document.head.append(meta);
}
};

app.url = (...c) => {
let canonicalLink = document.querySelector('link[rel="canonical"]');
if (canonicalLink) {
canonicalLink.setAttribute('href', c[0]);
} else {
let link = document.createElement('link');
link.setAttribute('rel', 'canonical');
link.setAttribute('href', c[0]);
document.head.append(link);
}
};

app.info = (d) => {
let metaD = document.querySelector('meta[name="description"]');
if (metaD) {
metaD.setAttribute('content', d);
} else {
let meta = document.createElement('meta');
meta.setAttribute('name', 'description');
meta.setAttribute('content', d);
document.head.append(meta);
}
};

app?(window.app = app):'';
fav?(window.fav = fav):'';

app('Change your title');
fav(27);
app.info("It is up! My app");
app.key("apple, fruit");


bit = () => {}; 
bit.db = null; 
bit.var = {}; 
bit.bc = null;

const _2h = (str) => {
return [...str].map(char => {
let hexi = char.charCodeAt(0).toString(16);
return hexi.padStart(2, '0');
}).join('');
};

const _f2h = (hex) => {
let str = '';
for (let i = 0; i < hex.length; i += 2) {
str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
}
return str;
};

bit = () => {}; 
bit.db = null; 
bit.var = {}; 
bit.bc = null;

bit.init = () => new Promise(d => {
let req = indexedDB.open('bit', 1);
req.onupgradeneeded = e => {
let db = e.target.result;
db.createObjectStore('dat');
};
req.onsuccess = e => {
bit.db = e.target.result;
bit.bc = new BroadcastChannel('bit_channel');
bit.bc.onmessage = e => { bit.var = e.data; };
d();
};
});

bit.up = (name, data) => new Promise((d, rej) => {
if (!bit.db) return rej('DB not initialized');

const hexName = `0x${_2h(name)}`;
const hexData = _2h(JSON.stringify(data || ''));

let tx = bit.db.transaction('dat', 'readwrite');
let st = tx.objectStore('dat');
st.put(hexData, hexName).onsuccess = _ => {
bit.var[name] = data;
bit.bc.postMessage(bit.var);
d(data);
};
});

bit.push = (name, data) => new Promise((d, rej) => {
if (!bit.db) return rej('DB not initialized');

const hexName = `0x${_2h(name)}`;
let tx = bit.db.transaction('dat', 'readwrite');
let st = tx.objectStore('dat');
let req = st.get(hexName);

req.onsuccess = () => {
let existingData = req.result;
let newData;

if (existingData) {
try {
existingData = _f2h(existingData);
newData = [...JSON.parse(existingData), data];
} catch (e) {
newData = [existingData, data];
}
} else {
newData = [data];
}

const hexData = _2h(JSON.stringify(newData));
st.put(hexData, hexName).onsuccess = _ => {
bit.var[name] = newData;
bit.bc.postMessage(bit.var);
d(newData);
};
};

req.onerror = () => { rej('Error retrieving data'); };
});

bit.get = (name) => new Promise((d, rej) => {
if (!bit.db) return rej('DB not initialized');

const hexName = `0x${_2h(name)}`;

let tx = bit.db.transaction('dat', 'readonly');
let st = tx.objectStore('dat');
let req = st.get(hexName);

req.onsuccess = () => {
let hexData = req.result;
if (hexData === null) {
d(null);
} else {
try {
let decodedData = _f2h(hexData);
try {
d(JSON.parse(decodedData));
} catch (e) {
d(decodedData);
}
} catch (e) {
d(null);
}
}
};

req.onerror = () => { rej('Error retrieving data'); };
});

bit?(window.bit = bit):'';

const num=()=>{};
num.accessibility = () => {
const elements = [
{ selector: "img", alt: "Image", aria: "Image" },
{ selector: "video", alt: "Video", aria: "Video" },
{ selector: "iframe", alt: "Iframe", aria: "Iframe" },
{ selector: "embed", alt: "Embed", aria: "Embed" },
{ selector: "say", alt: "Say text", aria: "Say text" }
];

elements.forEach(({ selector, alt, aria }) => {
const items = document.querySelectorAll(selector);

items.forEach(item => {
let dynamicAlt = alt;
let dynamicAria = aria;

if (selector === "img" && item.hasAttribute("src") && !item.hasAttribute("alt")) {
dynamicAlt = item.getAttribute("src").split('/').pop().split('.')[0] || dynamicAlt;
item.setAttribute("alt", dynamicAlt);
}

if (selector === "say" && item.textContent.trim()) {
dynamicAria = item.textContent.trim();
} else if (item.hasAttribute("textContent")) {
dynamicAria = item.textContent.trim() || dynamicAria;
}
if (!item.hasAttribute("aria-label")) {
item.setAttribute("aria-label", dynamicAria);
}
if (item.hasAttribute("say") && !item.hasAttribute("aria-label")) {
item.setAttribute("aria-label", item.getAttribute("say"));
}
});
});
};

  
num.dom = () => {

const doctype = document.doctype;
if (!doctype) {
const newDoctype = document.implementation.createDocumentType('html', '', '');
document.insertBefore(newDoctype, document.documentElement);
}

const html = document.querySelector("html");
if (!html.getAttribute("lang")) html.setAttribute("lang", "en");
if (!html.getAttribute("origin")) html.setAttribute("origin", "num");
if (!html.getAttribute("filetype")) html.setAttribute("filetype", "num");
const viewport = document.querySelector('meta[name="viewport"]');
viewport && viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
|| (() => {
const meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');

meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.querySelector('head').append(meta);
})();

};
num.edit = () => {
const askL = pick.all('ask');
askL.forEach((el, i) => {
el.contentEditable = true;
el.dataset.idx = i;

const savedData = localStorage.getItem(i);
if (savedData) el.textContent = savedData;

el.addEventListener('input', () => {
el.style.height = 'auto';
localStorage.setItem(el.dataset.idx, el.textContent);
});
});
};
num.link = () => {
const toL = pick.all('[to]');
toL.length && toL.forEach(el => {
const targetSelector = `#${el.getAttribute('to')}`;

el.addEventListener('input', function() {
const target = pick(targetSelector);
target && (target.textContent = this.value || this.textContent || 'Oops');
});

el.addEventListener('mousedown', function() {
const target = pick(targetSelector);
target && (target.textContent = this.textContent || this.value || 'Oops');
});
});
};
num.tap = () => {
const tapL = pick.all('[go]');
tapL.length && tapL.forEach(el => {
el.addEventListener('mousedown', () => {
el.hasAttribute('go') || (window.location.href = 
el.getAttribute('go')
);

});
});
};
num.js = () => {
const doL = pick.all('[do]');
const doeL = pick.all('do');

doL.length && doL.forEach(el => {
const js = el.getAttribute('do');
const tg = el.tagName.toLowerCase();

!el.inputAdded && (['ask','textarea','input'].includes(tg)) && 
(el.addEventListener('input', () => eval(js)), el.inputAdded = true);

!el.mousedownAdded && (['a','tap','card','cont','list','button','say'].includes(tg)) && 
(el.addEventListener('mousedown', () => eval(js)), el.mousedownAdded = true);

});

doeL.length && doeL.forEach(el => {
!el.executed && (eval(el.textContent.trim()), el.executed = true);
});
};
num.upload = () => {
const uploadLE = pick.all('[upload]');
uploadLE.length && uploadLE.forEach(el => {
el.addEventListener('mousedown', () => {
const targetId = el.getAttribute('upload');
const inp = make('input');
inp.type = 'file';
inp.style.visibility = 'hidden';
document.body.append(inp);

inp.onchange = (e) => {
let rdr = new FileReader();
rdr.onload = () => {
const targetElement = document.querySelector(`#${targetId}`);
targetElement && (targetElement.textContent = rdr.result);
};
rdr.readAsText(e.target.files[0]);
};
inp.click();
inp.remove();
});
});
};
num.save = () => {
const saveLE = pick.all('[save]');
saveLE.length && saveLE.forEach(el => {
el.addEventListener('mousedown', () => {
const id = el.getAttribute('save');
let data;
if (id === 'cam' || id === 'feed') {
data = id === 'cam' ? document.querySelector('#cam video').srcObject : document.querySelector('#feed video').srcObject;
} else if (id === 'ask') {
data = document.querySelector(`#${id}`).textContent || document.querySelector(`#${id}`).value;
} else {
data = document.querySelector(`#${id}`).textContent;
}
const type = el.getAttribute('file') || 'txt';
const types = {
txt: 'text/plain',
json: 'application/json',
html: 'text/html',
csv: 'text/csv',
js: 'application/javascript',
css: 'text/css',
xml: 'application/xml',
pdf: 'application/pdf',
png: 'image/png',
jpg: 'image/jpeg',
jpeg: 'image/jpeg',
gif: 'image/gif',
svg: 'image/svg+xml',
webp: 'image/webp',
mp3: 'audio/mpeg',
wav: 'audio/wav',
mp4: 'video/mp4',
avi: 'video/x-msvideo'
};
const mime = types[type] || 'text/plain';
const blob = new Blob([data], { type: mime });
const url = URL.createObjectURL(blob);
const a = make('a');
a.href = url;
a.download = `${Math.random().toString(36).substring(2, 15)}.${type}`;
a.click();
URL.revokeObjectURL(url);
});
});
};

  
num.origin = orn => {  
(!document.querySelector('link[rel="canonical"]')) && (
link = document.createElement('link'),  
link.at="rel='canonical'",
link.href = orn||'',
document.head.append(link)
)  
}

num.accessibility();
num.dom();
num.origin();

num&&(window.num=num);

const func=()=>{
num.edit();
num.link();
num.tap();
num.js();
num.upload();
num.save();
};

func();
func&&(window.func=func);
})();
