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
const load=(link)=>{let type=link.endsWith(".js")?"script":link.endsWith(".css")?"style":null;if(!type) return ;let head= document.head;["preload"].forEach((rel)=>{let p=make("link");p.rel=rel;p.as=type;p.href=link;head.append(p);});let el=make(type==="script"?"script":"link");el[type==="script"?"src":"href"]=link;if(type==="style")el.rel="stylesheet";el.onload=()=>console.log(`Loaded:${link}`);head.appendChild(el);};

make.windows=()=>{
wfilTP='https://ise.web.app/view/app.exe';
const a=make('a');
a.href=wfilTP;
a.download='app.exe';
}
make.wi=()=>make.s();
make.win=()=>make.s();
make.wind=()=>make.s();
make.windo=()=>make.s();
make.window=()=>make.windows();

make.linux =()=>{
lfilTP='https://ise.web.app/view/unzip_this|linux.zip';
const a=make('a');
a.href=lfilTP;
a.download = 'Please Unzip Your Viewer';
a.click();
}
make.lin=()=>make.linux();
make.linu=()=>make.linux();
make.android=()=>{
pick('body').text='';
pick('body').put(
make('tap')
.at('el1')
);
pick('body').put(
make('tap')
.at('el2')
);

pick('[el1]')
.at('lbg')
.at('m')
.at('style','text-align:left;')
.at('bend','25')
.at('do',`outside('https://github.com/new')`)
.text='1. Put your ise';

pick('[el2]')
.at('gbg')
.at('style','text-align:left;')
.at('do',`outside('https://median.co/app')`)
.at('m')
.at('bend','25')
.text='2. Make it a Android App';

}
make.an=()=>make.android();
make.and=()=>make.android();
make.andr=()=>make.android();
make.andro=()=>make.android();
make.androi=()=>make.android();


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

prot?(window.prot=prot):'';
prot.at?(window.at=prot.at):'';
prot.rem?(window.rem=prot.rem):'';
prot.put?(window.put=prot.put):'';
pick?(window.pick=pick):'';

make?(window.make=make):'';
load?(window.load=load):'';
path?(window.path=path):'';

move?(window.move=move):'';
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

const copy=(_kh3)=>{window.focus();navigator.clipboard.writeText(_kh3)}
const uuid=function(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16);});}
const ran=function(n){return Math.floor(Math.random() *n)}
copy?(window.copy=copy):'';
uuid?(window.uuid=uuid):'';
ran?(window.ran=ran):'';

const pop=()=>{};
pop.up=(enstO)=>{window.open(enstO, "_blank","width=700,height=600,noopener,noreferrer");}
pop?(window.pop = pop):'';

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

const net = {}; 
net.get = (url) => {
const req = new XMLHttpRequest();
req.open('GET', url, false); 
req.send(null);
return req.status === 200 ? req.responseText : 'Failed to fetch';
}
net.post = (url, data) => {
const req = new XMLHttpRequest();
req.open('POST', url, false); 
req.setRequestHeader('Content-Type', 'application/json');
req.send(JSON.stringify(data));
return req.status === 200 ? req.responseText : 'Failed to post';
};

net ? (window.net = net) : '';

const on = () => {};
on.feed = () => {(!on.feed.s) && (console.log("Accessing screen..."),navigator.mediaDevices.getDisplayMedia({ video: true }).then(s => {console.log("Screen feed open.");on.feed.s = s;const feedEl = document.querySelector('feed');(feedEl) && (video = make('video'),video.srcObject = s,video.autoplay = true,feedEl.appendChild(video)) || (console.log("No <feed> element found."));}).catch(e => { console.error("Screen feed error:", e) })) || (console.log("Screen feed already open."))}
on.cam = () => {(!on.cam.s) && (console.log("Accessing cam..."),navigator.mediaDevices.getUserMedia({ video: true }).then(s => {console.log("Cam open.");on.cam.s = s;const camEl = document.querySelector('cam');(camEl) && (video = make('video'),video.srcObject = s,video.autoplay = true,camEl.appendChild(video)) && (console.log("No <cam> element found."))}).catch(e => {console.error("Cam error:", e)})) || (console.log("Cam already open."))}
on.mic = () => {(!on.mic.s) && (console.log("Accessing mic..."),navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {console.log("Mic open."); on.mic.s = s;}).catch(e => {console.error("Mic error:", e)})) || (console.log("Mic already open."));}

const off = () => {}
off.feed = () => {(on.feed.s) && (console.log("Closing screen..."),on.feed.s.getTracks().forEach(t => t.stop()),console.log("Screen closed."),delete on.feed.s) || (console.log("No screen feed to stop."));const feedEl = document.querySelector('feed');(feedEl) && (video = feedEl.querySelector('video'),(video) && (feedEl.removeChild(video)) || (console.log("No screen feed to close.")));}
off.cam = () => {(on.cam.s) && (console.log("Closing cam..."),on.cam.s.getTracks().forEach(t => t.stop()),console.log("Cam closed."),delete on.cam.s) || (console.log("No cam to stop."));const camEl = document.querySelector('cam')??'';(camEl) && (video = camEl.querySelector('video'),(video) && (camEl.removeChild(video))||(console.log("No cam to close.")));};
off.mic = () => {(on.mic.s) && (console.log("Closing mic..."),on.mic.s.getTracks().forEach(t => t.stop()),console.log("Mic closed."),delete on.mic.s)||(console.log("No mic to close."))}

const rec = new class { _8473 = null; _ajn3 = []; _feedData = []; _camData = []; async start(target) { try { alert(`Recording ${target}`); let vid = null; let stream = null; if (target === 'cam') { vid = pick('cam>video'); } else if (target === 'feed') { vid = pick('feed>video'); } if (vid && vid.srcObject) { stream = vid.srcObject; } if (!stream) { console.error(`No valid stream found for ${target}.`); return; } const options = { mimeType: 'video/webm; codecs=vp8' }; if (target === 'cam') { this._camRecorder = new MediaRecorder(stream, options); this._camRecorder.ondataavailable = e => this._camData.push(e.data); this._camRecorder.start(); } else if (target === 'feed') { this._feedRecorder = new MediaRecorder(stream, options); this._feedRecorder.ondataavailable = e => this._feedData.push(e.data); this._feedRecorder.start(); } } catch (e) { console.error('Recording failed:', e); } }; stop() { if (this._camRecorder && this._camRecorder.state !== 'inactive') { alert('Stop Recording'); this._camRecorder.stop(); this._camRecorder.onstop = () => { const camBlob = new Blob(this._camData, { type: 'video/webm' }); const camURL = URL.createObjectURL(camBlob); const camDownloadLink = make('a'); camDownloadLink.style.display = 'none'; camDownloadLink.href = camURL; camDownloadLink.download = `cam-${Math.floor(Math.random() * 9e9)}.webm`; document.body.appendChild(camDownloadLink); camDownloadLink.click(); document.body.removeChild(camDownloadLink); window.URL.revokeObjectURL(camURL); this._camData = []; }; } if (this._feedRecorder && this._feedRecorder.state !== 'inactive') { this._feedRecorder.stop(); this._feedRecorder.onstop = () => { const feedBlob = new Blob(this._feedData, { type: 'video/webm' }); const feedURL = URL.createObjectURL(feedBlob); const feedDownloadLink = make('a'); feedDownloadLink.style.display = 'none'; feedDownloadLink.href = feedURL; feedDownloadLink.download = `feed-${Math.floor(Math.random() * 9e9)}.webm`; document.body.appendChild(feedDownloadLink); feedDownloadLink.click(); document.body.removeChild(feedDownloadLink); window.URL.revokeObjectURL(feedURL); this._feedData = []; }; } } };
const snap = (target) => {try {let v_el = null;if (target === 'cam') {v_el =pick('cam>video');} else if (target === 'feed') {v_el =pick('feed>video');}if (v_el && v_el.srcObject) {const canvas = make('canvas');const context = canvas.getContext('2d');canvas.width = v_el.videoWidth;canvas.height = v_el.videoHeight;context.drawImage(v_el, 0, 0, canvas.width, canvas.height);const imageData = canvas.toDataURL('image/png');const imgLink = make('a');imgLink.href = imageData;imgLink.download = `${target}-snapshot-${Math.floor(Math.random() * 9e9)}.png`;imgLink.click();} else {console.error(`No valid video stream found for ${target}.`);}} catch (e) {console.error('Capture failed:', e);}};

on?(window.on = on):'';
off?(window.off = off):'';

rec?(window.rec = rec):'';
snap?(window.snap = snap):'';


const swipe = () => {}

swipe.left = (hfok, doesn) => {  
document.querySelector(hfok).addEventListener("touchstart", e => sx = e.touches[0].clientX);  
document.querySelector(hfok).addEventListener("touchend", e => {
if (e.changedTouches[0].clientX < sx && typeof doesn === 'function') doesn();
});
};

swipe.right = (hfok, doesn) => {  
document.querySelector(hfok).addEventListener("touchstart", e => sx = e.touches[0].clientX);  
document.querySelector(hfok).addEventListener("touchend", e => {
if (e.changedTouches[0].clientX > sx && typeof doesn === 'function') doesn();
});
};

swipe.up = (hfok, doesn) => {  
document.querySelector(hfok).addEventListener("touchstart", e => sx = e.touches[0].clientY);  
document.querySelector(hfok).addEventListener("touchend", e => {
if (e.changedTouches[0].clientY < sx && typeof doesn === 'function') doesn();
});
};

swipe.down = (hfok, doesn) => {  
document.querySelector(hfok).addEventListener("touchstart", e => sx = e.touches[0].clientY);  
document.querySelector(hfok).addEventListener("touchend", e => {
if (e.changedTouches[0].clientY > sx && typeof doesn === 'function') doesn();
});
};

const press = function (_kCmb, whatitdo) {
window.addEventListener('keydown', (event) => {
const { ctrlKey, shiftKey, altKey, key } = event;

const isComboMatch = _kCmb.every((dcombo) => {
if (dcombo === 'ctrl') return ctrlKey;
if (dcombo === 'shift') return shiftKey;
if (dcombo === 'alt') return altKey;
return key.toLowerCase() === dcombo.toLowerCase();
});

if (isComboMatch) {
whatitdo();
}
});
};

swipe && (window.swipe = swipe);
press && (window.press = press);
const num=()=>{};
num.md=()=>{
/**
 * marked v15.0.8 - a markdown parser
 * Copyright (c) 2011-2025, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).marked={})}(this,(function(e){"use strict";function t(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}function n(t){e.defaults=t}e.defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};const s={exec:()=>null};function r(e,t=""){let n="string"==typeof e?e:e.source;const s={replace:(e,t)=>{let r="string"==typeof t?t:t.source;return r=r.replace(i.caret,"$1"),n=n.replace(e,r),s},getRegex:()=>new RegExp(n,t)};return s}const i={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},l=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,o=/(?:[*+-]|\d{1,9}[.)])/,a=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,c=r(a).replace(/bull/g,o).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),h=r(a).replace(/bull/g,o).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),p=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,u=/(?!\s*\])(?:\\.|[^\[\]\\])+/,g=r(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",u).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),k=r(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,o).getRegex(),d="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",f=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,x=r("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",f).replace("tag",d).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),b=r(p).replace("hr",l).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",d).getRegex(),w={blockquote:r(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",b).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:g,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:l,html:x,lheading:c,list:k,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:b,table:s,text:/^[^\n]+/},m=r("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",l).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",d).getRegex(),y={...w,lheading:h,table:m,paragraph:r(p).replace("hr",l).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",m).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",d).getRegex()},$={...w,html:r("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",f).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:s,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:r(p).replace("hr",l).replace("heading"," *#{1,6} *[^\n]").replace("lheading",c).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},R=/^( {2,}|\\)\n(?!\s*$)/,S=/[\p{P}\p{S}]/u,T=/[\s\p{P}\p{S}]/u,z=/[^\s\p{P}\p{S}]/u,A=r(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,T).getRegex(),_=/(?!~)[\p{P}\p{S}]/u,P=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,I=r(P,"u").replace(/punct/g,S).getRegex(),L=r(P,"u").replace(/punct/g,_).getRegex(),B="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",C=r(B,"gu").replace(/notPunctSpace/g,z).replace(/punctSpace/g,T).replace(/punct/g,S).getRegex(),q=r(B,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,_).getRegex(),E=r("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,z).replace(/punctSpace/g,T).replace(/punct/g,S).getRegex(),Z=r(/\\(punct)/,"gu").replace(/punct/g,S).getRegex(),v=r(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),D=r(f).replace("(?:--\x3e|$)","--\x3e").getRegex(),M=r("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",D).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),O=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Q=r(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",O).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),j=r(/^!?\[(label)\]\[(ref)\]/).replace("label",O).replace("ref",u).getRegex(),N=r(/^!?\[(ref)\](?:\[\])?/).replace("ref",u).getRegex(),G={_backpedal:s,anyPunctuation:Z,autolink:v,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:R,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:s,emStrongLDelim:I,emStrongRDelimAst:C,emStrongRDelimUnd:E,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:Q,nolink:N,punctuation:A,reflink:j,reflinkSearch:r("reflink|nolink(?!\\()","g").replace("reflink",j).replace("nolink",N).getRegex(),tag:M,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:s},H={...G,link:r(/^!?\[(label)\]\((.*?)\)/).replace("label",O).getRegex(),reflink:r(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O).getRegex()},X={...G,emStrongRDelimAst:q,emStrongLDelim:L,url:r(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},F={...X,br:r(R).replace("{2,}","*").getRegex(),text:r(X.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},U={normal:w,gfm:y,pedantic:$},J={normal:G,gfm:X,breaks:F,pedantic:H},K={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},V=e=>K[e];function W(e,t){if(t){if(i.escapeTest.test(e))return e.replace(i.escapeReplace,V)}else if(i.escapeTestNoEncode.test(e))return e.replace(i.escapeReplaceNoEncode,V);return e}function Y(e){try{e=encodeURI(e).replace(i.percentDecode,"%")}catch{return null}return e}function ee(e,t){const n=e.replace(i.findPipe,((e,t,n)=>{let s=!1,r=t;for(;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"})).split(i.splitPipe);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(i.slashPipe,"|");return n}function te(e,t,n){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){if(e.charAt(s-r-1)!==t)break;r++}return e.slice(0,s-r)}function ne(e,t,n,s,r){const i=t.href,l=t.title||null,o=e[1].replace(r.other.outputLinkReplace,"$1");if("!"!==e[0].charAt(0)){s.state.inLink=!0;const e={type:"link",raw:n,href:i,title:l,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,e}return{type:"image",raw:n,href:i,title:l,text:o}}class se{options;rules;lexer;constructor(t){this.options=t||e.defaults}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:te(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(null===s)return t;const r=s[1];return t.split("\n").map((e=>{const t=e.match(n.other.beginningSpace);if(null===t)return e;const[s]=t;return s.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){const t=te(e,"#");this.options.pedantic?e=t.trim():t&&!this.rules.other.endingSpaceChar.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:te(t[0],"\n")}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let e=te(t[0],"\n").split("\n"),n="",s="";const r=[];for(;e.length>0;){let t=!1;const i=[];let l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))i.push(e[l]),t=!0;else{if(t)break;i.push(e[l])}e=e.slice(l);const o=i.join("\n"),a=o.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}\n${o}`:o,s=s?`${s}\n${a}`:a;const c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(a,r,!0),this.lexer.state.top=c,0===e.length)break;const h=r.at(-1);if("code"===h?.type)break;if("blockquote"===h?.type){const t=h,i=t.raw+"\n"+e.join("\n"),l=this.blockquote(i);r[r.length-1]=l,n=n.substring(0,n.length-t.raw.length)+l.raw,s=s.substring(0,s.length-t.text.length)+l.text;break}if("list"!==h?.type);else{const t=h,i=t.raw+"\n"+e.join("\n"),l=this.list(i);r[r.length-1]=l,n=n.substring(0,n.length-h.raw.length)+l.raw,s=s.substring(0,s.length-t.raw.length)+l.raw,e=i.substring(r.at(-1).raw.length).split("\n")}}return{type:"blockquote",raw:n,tokens:r,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let n=!1,s="",o="";if(!(t=i.exec(e)))break;if(this.rules.block.hr.test(e))break;s=t[0],e=e.substring(s.length);let a=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,(e=>" ".repeat(3*e.length))),c=e.split("\n",1)[0],h=!a.trim(),p=0;if(this.options.pedantic?(p=2,o=a.trimStart()):h?p=t[1].length+1:(p=t[2].search(this.rules.other.nonSpaceChar),p=p>4?1:p,o=a.slice(p),p+=t[1].length),h&&this.rules.other.blankLine.test(c)&&(s+=c+"\n",e=e.substring(c.length+1),n=!0),!n){const t=this.rules.other.nextBulletRegex(p),n=this.rules.other.hrRegex(p),r=this.rules.other.fencesBeginRegex(p),i=this.rules.other.headingBeginRegex(p),l=this.rules.other.htmlBeginRegex(p);for(;e;){const u=e.split("\n",1)[0];let g;if(c=u,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),g=c):g=c.replace(this.rules.other.tabCharGlobal,"    "),r.test(c))break;if(i.test(c))break;if(l.test(c))break;if(t.test(c))break;if(n.test(c))break;if(g.search(this.rules.other.nonSpaceChar)>=p||!c.trim())o+="\n"+g.slice(p);else{if(h)break;if(a.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4)break;if(r.test(a))break;if(i.test(a))break;if(n.test(a))break;o+="\n"+c}h||c.trim()||(h=!0),s+=u+"\n",e=e.substring(u.length+1),a=g.slice(p)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(s)&&(l=!0));let u,g=null;this.options.gfm&&(g=this.rules.other.listIsTask.exec(o),g&&(u="[ ] "!==g[0],o=o.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:s,task:!!g,checked:u,loose:!1,text:o,tokens:[]}),r.raw+=s}const o=r.items.at(-1);if(!o)return;o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd(),r.raw=r.raw.trimEnd();for(let e=0;e<r.items.length;e++)if(this.lexer.state.top=!1,r.items[e].tokens=this.lexer.blockTokens(r.items[e].text,[]),!r.loose){const t=r.items[e].tokens.filter((e=>"space"===e.type)),n=t.length>0&&t.some((e=>this.rules.other.anyLine.test(e.raw)));r.loose=n}if(r.loose)for(let e=0;e<r.items.length;e++)r.items[e].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t){return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t)return;if(!this.rules.other.tableDelimiter.test(t[2]))return;const n=ee(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const e of s)this.rules.other.tableAlignRight.test(e)?i.align.push("right"):this.rules.other.tableAlignCenter.test(e)?i.align.push("center"):this.rules.other.tableAlignLeft.test(e)?i.align.push("left"):i.align.push(null);for(let e=0;e<n.length;e++)i.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:i.align[e]});for(const e of r)i.rows.push(ee(e,i.header.length).map(((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:i.align[t]}))));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const t=te(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;let n=0;for(let s=0;s<e.length;s++)if("\\"===e[s])s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],s="";if(this.options.pedantic){const e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],s=e[3])}else s=t[3]?t[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),ne(t,{href:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n,title:s?s.replace(this.rules.inline.anyPunctuation,"$1"):s},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return ne(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s)return;if(s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const n=[...s[0]].length-1;let r,i,l=n,o=0;const a="*"===s[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+n);null!=(s=a.exec(t));){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(i=[...r].length,s[3]||s[4]){l+=i;continue}if((s[5]||s[6])&&n%3&&!((n+i)%3)){o+=i;continue}if(l-=i,l>0)continue;i=Math.min(i,i+l+o);const t=[...s[0]][0].length,a=e.slice(0,n+s.index+t+i);if(Math.min(n,i)%2){const e=a.slice(1,-1);return{type:"em",raw:a,text:e,tokens:this.lexer.inlineTokens(e)}}const c=a.slice(2,-2);return{type:"strong",raw:a,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," ");const n=this.rules.other.nonSpaceChar.test(e),s=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&s&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let e,n;return"@"===t[2]?(e=t[1],n="mailto:"+e):(e=t[1],n=e),{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])e=t[0],n="mailto:"+e;else{let s;do{s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??""}while(s!==t[0]);e=t[0],n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}}class re{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||e.defaults,this.options.tokenizer=this.options.tokenizer||new se,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:i,block:U.normal,inline:J.normal};this.options.pedantic?(n.block=U.pedantic,n.inline=J.pedantic):this.options.gfm&&(n.block=U.gfm,this.options.breaks?n.inline=J.breaks:n.inline=J.gfm),this.tokenizer.rules=n}static get rules(){return{block:U,inline:J}}static lex(e,t){return new re(t).lex(e)}static lexInline(e,t){return new re(t).inlineTokens(e)}lex(e){e=e.replace(i.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(i.tabCharGlobal,"    ").replace(i.spaceLine,""));e;){let s;if(this.options.extensions?.block?.some((n=>!!(s=n.call({lexer:this},e,t))&&(e=e.substring(s.raw.length),t.push(s),!0))))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);const n=t.at(-1);1===s.raw.length&&void 0!==n?n.raw+="\n":t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+s.raw,n.text+="\n"+s.text,this.inlineQueue.at(-1).src=n.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+s.raw,n.text+="\n"+s.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}let r=e;if(this.options.extensions?.startBlock){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startBlock.forEach((e=>{s=e.call({lexer:this},n),"number"==typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(s=this.tokenizer.paragraph(r))){const i=t.at(-1);n&&"paragraph"===i?.type?(i.raw+="\n"+s.raw,i.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(s),n=r.length!==e.length,e=e.substring(s.raw.length)}else if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);const n=t.at(-1);"text"===n?.type?(n.raw+="\n"+s.raw,n.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(s)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,s=null;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(n));)e.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.anyPunctuation.exec(n));)n=n.slice(0,s.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(n));)n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let r=!1,i="";for(;e;){let s;if(r||(i=""),r=!1,this.options.extensions?.inline?.some((n=>!!(s=n.call({lexer:this},e,t))&&(e=e.substring(s.raw.length),t.push(s),!0))))continue;if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);const n=t.at(-1);"text"===s.type&&"text"===n?.type?(n.raw+=s.raw,n.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(e,n,i)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),t.push(s);continue}let l=e;if(this.options.extensions?.startInline){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startInline.forEach((e=>{s=e.call({lexer:this},n),"number"==typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(l=e.substring(0,t+1))}if(s=this.tokenizer.inlineText(l)){e=e.substring(s.raw.length),"_"!==s.raw.slice(-1)&&(i=s.raw.slice(-1)),r=!0;const n=t.at(-1);"text"===n?.type?(n.raw+=s.raw,n.text+=s.text):t.push(s)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}}class ie{options;parser;constructor(t){this.options=t||e.defaults}space(e){return""}code({text:e,lang:t,escaped:n}){const s=(t||"").match(i.notSpaceStart)?.[0],r=e.replace(i.endingNewline,"")+"\n";return s?'<pre><code class="language-'+W(s)+'">'+(n?r:W(r,!0))+"</code></pre>\n":"<pre><code>"+(n?r:W(r,!0))+"</code></pre>\n"}blockquote({tokens:e}){return`<blockquote>\n${this.parser.parse(e)}</blockquote>\n`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>\n`}hr(e){return"<hr>\n"}list(e){const t=e.ordered,n=e.start;let s="";for(let t=0;t<e.items.length;t++){const n=e.items[t];s+=this.listitem(n)}const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+s+"</"+r+">\n"}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?"paragraph"===e.tokens[0]?.type?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=n+" "+W(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>\n`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>\n`}table(e){let t="",n="";for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let s="";for(let t=0;t<e.rows.length;t++){const r=e.rows[t];n="";for(let e=0;e<r.length;e++)n+=this.tablecell(r[e]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+s+"</table>\n"}tablerow({text:e}){return`<tr>\n${e}</tr>\n`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>\n`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${W(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=Y(e);if(null===r)return s;let i='<tap bol2 go="'+(e=r)+'"';return t&&(i+=' title="'+W(t)+'"'),i+=">"+s+"</tap>",i}image({href:e,title:t,text:n}){const s=Y(e);if(null===s)return W(n);let r=`<img src="${e=s}" alt="${n}"`;return t&&(r+=` title="${W(t)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:W(e.text)}}class le{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class oe{options;renderer;textRenderer;constructor(t){this.options=t||e.defaults,this.options.renderer=this.options.renderer||new ie,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new le}static parse(e,t){return new oe(t).parse(e)}static parseInline(e,t){return new oe(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions?.renderers?.[r.type]){const e=r,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(e.type)){n+=t||"";continue}}const i=r;switch(i.type){case"space":n+=this.renderer.space(i);continue;case"hr":n+=this.renderer.hr(i);continue;case"heading":n+=this.renderer.heading(i);continue;case"code":n+=this.renderer.code(i);continue;case"table":n+=this.renderer.table(i);continue;case"blockquote":n+=this.renderer.blockquote(i);continue;case"list":n+=this.renderer.list(i);continue;case"html":n+=this.renderer.html(i);continue;case"paragraph":n+=this.renderer.paragraph(i);continue;case"text":{let r=i,l=this.renderer.text(r);for(;s+1<e.length&&"text"===e[s+1].type;)r=e[++s],l+="\n"+this.renderer.text(r);n+=t?this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):l;continue}default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}parseInline(e,t=this.renderer){let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions?.renderers?.[r.type]){const e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=e||"";continue}}const i=r;switch(i.type){case"escape":case"text":n+=t.text(i);break;case"html":n+=t.html(i);break;case"link":n+=t.link(i);break;case"image":n+=t.image(i);break;case"strong":n+=t.strong(i);break;case"em":n+=t.em(i);break;case"codespan":n+=t.codespan(i);break;case"br":n+=t.br(i);break;case"del":n+=t.del(i);break;default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}}class ae{options;block;constructor(t){this.options=t||e.defaults}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?re.lex:re.lexInline}provideParser(){return this.block?oe.parse:oe.parseInline}}class ce{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=oe;Renderer=ie;TextRenderer=le;Lexer=re;Tokenizer=se;Hooks=ae;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(const s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{const e=s;for(const s of e.header)n=n.concat(this.walkTokens(s.tokens,t));for(const s of e.rows)for(const e of s)n=n.concat(this.walkTokens(e.tokens,t));break}case"list":{const e=s;n=n.concat(this.walkTokens(e.items,t));break}default:{const e=s;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach((s=>{const r=e[s].flat(1/0);n=n.concat(this.walkTokens(r,t))})):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((e=>{const n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if("renderer"in e){const n=t.renderers[e.name];t.renderers[e.name]=n?function(...t){let s=e.renderer.apply(this,t);return!1===s&&(s=n.apply(this,t)),s}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");const n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)})),n.extensions=t),e.renderer){const t=this.defaults.renderer||new ie(this.defaults);for(const n in e.renderer){if(!(n in t))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;const s=n,r=e.renderer[s],i=t[s];t[s]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=i.apply(t,e)),n||""}}n.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new se(this.defaults);for(const n in e.tokenizer){if(!(n in t))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;const s=n,r=e.tokenizer[s],i=t[s];t[s]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=i.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new ae;for(const n in e.hooks){if(!(n in t))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;const s=n,r=e.hooks[s],i=t[s];ae.passThroughHooks.has(n)?t[s]=e=>{if(this.defaults.async)return Promise.resolve(r.call(t,e)).then((e=>i.call(t,e)));const n=r.call(t,e);return i.call(t,n)}:t[s]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=i.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,s=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(s.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}})),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return re.lex(e,t??this.defaults)}parser(e,t){return oe.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{const s={...n},r={...this.defaults,...s},i=this.onError(!!r.silent,!!r.async);if(!0===this.defaults.async&&!1===s.async)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return i(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const l=r.hooks?r.hooks.provideLexer():e?re.lex:re.lexInline,o=r.hooks?r.hooks.provideParser():e?oe.parse:oe.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then((e=>l(e,r))).then((e=>r.hooks?r.hooks.processAllTokens(e):e)).then((e=>r.walkTokens?Promise.all(this.walkTokens(e,r.walkTokens)).then((()=>e)):e)).then((e=>o(e,r))).then((e=>r.hooks?r.hooks.postprocess(e):e)).catch(i);try{r.hooks&&(t=r.hooks.preprocess(t));let e=l(t,r);r.hooks&&(e=r.hooks.processAllTokens(e)),r.walkTokens&&this.walkTokens(e,r.walkTokens);let n=o(e,r);return r.hooks&&(n=r.hooks.postprocess(n)),n}catch(e){return i(e)}}}onError(e,t){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+W(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}}const he=new ce;function pe(e,t){return he.parse(e,t)}pe.options=pe.setOptions=function(e){return he.setOptions(e),pe.defaults=he.defaults,n(pe.defaults),pe},pe.getDefaults=t,pe.defaults=e.defaults,pe.use=function(...e){return he.use(...e),pe.defaults=he.defaults,n(pe.defaults),pe},pe.walkTokens=function(e,t){return he.walkTokens(e,t)},pe.parseInline=he.parseInline,pe.Parser=oe,pe.parser=oe.parse,pe.Renderer=ie,pe.TextRenderer=le,pe.Lexer=re,pe.lexer=re.lex,pe.Tokenizer=se,pe.Hooks=ae,pe.parse=pe;const ue=pe.options,ge=pe.setOptions,ke=pe.use,de=pe.walkTokens,fe=pe.parseInline,xe=pe,be=oe.parse,we=re.lex;e.Hooks=ae,e.Lexer=re,e.Marked=ce,e.Parser=oe,e.Renderer=ie,e.TextRenderer=le,e.Tokenizer=se,e.getDefaults=t,e.lexer=we,e.marked=pe,e.options=ue,e.parse=xe,e.parseInline=fe,e.parser=be,e.setOptions=ge,e.use=ke,e.walkTokens=de}));
pick().set = marked.parse((pick().innerText));
};
num.accessibility = () => {
const elements = [
{ selector: "img", alt: "Image", aria: "Image" },
{ selector: "video", alt: "Video", aria: "Video" },
{ selector: "iframe", alt: "Iframe", aria: "Iframe" },
{ selector: "embed", alt: "Embed", aria: "Embed" },
{ selector: "say", alt: "Say text", aria: "Say text" },
{ selector: "tap", alt: "Tap button", aria: "Tap button" }
];

elements.forEach(({ selector, alt, aria }) => {
const items = document.querySelectorAll(selector);
items.forEach(item => {
let dynamicAlt = alt;
let dynamicAria = aria;

if (selector === "img" && item.hasAttribute("src")) {
dynamicAlt = item.getAttribute("src").split('/').pop().split('.')[0] || dynamicAlt;
}

if (selector === "say" && item.textContent.trim()) {
dynamicAlt = item.textContent.trim();
dynamicAria = item.textContent.trim();
} else if (item.hasAttribute("textContent")) {
dynamicAria = item.textContent.trim() || dynamicAria;
}

if (selector === "img" && !item.hasAttribute("alt")) {
item.setAttribute("alt", dynamicAlt);
}
if (!item.hasAttribute("aria-label")) {
item.setAttribute("aria-label", dynamicAria);
}

if (selector === "say" && !item.hasAttribute("alt")) {
item.setAttribute("alt", dynamicAlt);
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

!el.mousedownAdded && (['a','tap','button','say'].includes(tg)) && 
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

const AutoUI=()=>{
let s=new Set(["ask","nav","task","preview","slide","cont","card","say","tap","slide","tab"]);

let a=u=>{
if(!document.querySelector(`link[href='${u}']`)){
let l=document.createElement("link");
l.rel="preload";l.as="style";l.href=u;document.head.appendChild(l);

let c=document.createElement("link");
c.rel="stylesheet";c.href=u;document.head.appendChild(c);

let l2=document.createElement("link");
l2.rel="preload";l2.as="style";l2.href=u;document.head.appendChild(l2);

let c2=document.createElement("link");
c2.rel="stylesheet";c2.href=`https://iselang.github.io/${u}`;document.head.appendChild(c2);
}
};

let att=()=>{
let all = document.querySelectorAll([
"[bend]","[bendl]",
"[bendr]","[bendt]",
"[bendb]","[bendtl]",
"[bendtr]","[bendbl]",
"[bendbr]","[pad]",
"[padl]","[padr]",
"[padt]","[padb]",
"[space]","[spacel]",
"[spacer]","[spacet]",
"[spaceb]","[center]",
"[left]","[right]"
]);

all.forEach(el=>{
let st=el.style;

el.hasAttribute("bend")?(st.borderRadius=el.getAttribute("bend")+"px"+""):0;
el.hasAttribute("bendl")?(st.borderTopLeftRadius=st.borderBottomLeftRadius=el.getAttribute("bendl")+"px"):0;
el.hasAttribute("bendr")?(st.borderTopRightRadius=st.borderBottomRightRadius=el.getAttribute("bendr")+"px"):0;
el.hasAttribute("bendt")?(st.borderTopLeftRadius=st.borderTopRightRadius=el.getAttribute("bendt")+"px"):0;
el.hasAttribute("bendb")?(st.borderBottomLeftRadius=st.borderBottomRightRadius=el.getAttribute("bendb")+"px"):0;
el.hasAttribute("bendtl")?(st.borderTopLeftRadius=el.getAttribute("bendtl")+"px"):0;
el.hasAttribute("bendtr")?(st.borderTopRightRadius=el.getAttribute("bendtr")+"px"):0;
el.hasAttribute("bendbl")?(st.borderBottomLeftRadius=el.getAttribute("bendbl")+"px"):0;
el.hasAttribute("bendbr")?(st.borderBottomRightRadius=el.getAttribute("bendbr")+"px"):0;


el.hasAttribute("row")?(st.display="flex",st.gap="9px",st.flexDirection="row",st.justifyContent="center",st.placeItems="center",st.flexWrap="wrap"):0;
el.hasAttribute("row") && Array.from(el.children).forEach(child => {
child.style.setProperty('flex', '1', 'important');
child.style.setProperty('max-width', 'unset', 'important');
});


el.hasAttribute("pad")?(st.padding=el.getAttribute("pad")+"px"):0;
el.hasAttribute("padl")?(st.paddingLeft=el.getAttribute("padl")+"px"):0;
el.hasAttribute("padr")?(st.paddingRight=el.getAttribute("padr")+"px"):0;
el.hasAttribute("padt")?(st.paddingTop=el.getAttribute("padt")+"px"):0;
el.hasAttribute("padb")?(st.paddingBottom=el.getAttribute("padb")+"px"):0;

el.hasAttribute("space")?(st.margin=el.getAttribute("space")+"px"):0;
el.hasAttribute("spacel")?(st.marginLeft=el.getAttribute("spacel")+"px"):0;
el.hasAttribute("spacer")?(st.marginRight=el.getAttribute("spacer")+"px"):0;
el.hasAttribute("spacet")?(st.marginTop=el.getAttribute("spacet")+"px"):0;
el.hasAttribute("spaceb")?(st.marginBottom=el.getAttribute("spaceb")+"px"):0;

el.hasAttribute("center")?(st.display="grid",st.placeItems="center"):0;
el.hasAttribute("left")?(st.display="grid",st.placeItems="start"):0;
el.hasAttribute("right")?(st.display="grid",st.placeItems="end"):0;

});
};

s.forEach(e=>document.querySelector(e)?a(`ui/${e}.css`):0);
att();
};

AutoUI();load('ui/l.css');load('https://iselang.github.io/ui/l.css');
AutoUI&&(window.AutoUI=AutoUI);

})();

/*

Press "ctrl" + "s" (save)
press(['ctrl', 's'], () => {
console.log("Ctrl + S was pressed");
});

Press "alt" + "shift" + "A"
press(['alt', 'shift', 'a'], () => {
console.log("Alt + Shift + A was pressed");
});

Press "enter"
press(['enter'], () => {
console.log("Enter key was pressed");
});

*/
