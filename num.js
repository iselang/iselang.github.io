// Hey i know this is online
/* 
My code is not about the coder
It is about the advancement it did.

github.com/iselang/num

Copyleft By y
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
const path=(inTo=null,state={})=>{if(inTo===null)return window.location.pathname;window.history.pushState(state,"",inTo);window.dispatchEvent(newEvent("pathchange"));};
path.load=(name)=>{let head=document.head||document.querySelector("head");if(!head){console.error("No <head> found!");return;}let preload=document.createElement("link");Object.assign(preload,{rel:"preload",as:"script",href:name});head.append(preload);}
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
bon(etl).put(bon(mot));
};
move.up = function(sel) {
const el = bon(sel);         
const ps = el.previousElementSibling;  
if (ps) {
el.parentNode.insertBefore(el, ps);  
}
};
move.down = function(sel) {
const el = bon(sel);         
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

const bit = () => {};
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

let _hex = {};
bit.set = (address=0, value) => {

const hexAddress = `0x${_2h(address)}`;
const hexValue = _2h(JSON.stringify(value||''));
_hex = hexValue;
address=='SXD'?localStorage.clear():localStorage.setItem(hexAddress, hexValue);
value?console.log(`Memory Set ${hexAddress}`):console.log(`Memory Reset ${hexAddress}`);

};
bit.get = (address) => {
const hexAddress = `0x${_2h(address)}`;
console.log(`Memory Get ${hexAddress}`);
const hexData = localStorage.getItem(hexAddress);
if (hexData === null) {
return null;
}
try {
const decodedData = _f2h(hexData);
return JSON.parse(decodedData);
} catch (e) {
return _f2h(hexData);
}
};
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
on.feed = () => {(!on.feed.s) && (console.log("Accessing screen..."),navigator.mediaDevices.getDisplayMedia({ video: true }).then(s => {console.log("Screen feed open.");on.feed.s = s;const feedEl = document.querySelector('feed');(feedEl) && (video = bon.add('video'),video.srcObject = s,video.autoplay = true,feedEl.appendChild(video)) || (console.log("No <feed> element found."));}).catch(e => { console.error("Screen feed error:", e) })) || (console.log("Screen feed already open."))}
on.cam = () => {(!on.cam.s) && (console.log("Accessing cam..."),navigator.mediaDevices.getUserMedia({ video: true }).then(s => {console.log("Cam open.");on.cam.s = s;const camEl = document.querySelector('cam');(camEl) && (video = bon.add('video'),video.srcObject = s,video.autoplay = true,camEl.appendChild(video)) && (console.log("No <cam> element found."))}).catch(e => {console.error("Cam error:", e)})) || (console.log("Cam already open."))}
on.mic = () => {(!on.mic.s) && (console.log("Accessing mic..."),navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {console.log("Mic open."); on.mic.s = s;}).catch(e => {console.error("Mic error:", e)})) || (console.log("Mic already open."));}

const off = () => {}
off.feed = () => {(on.feed.s) && (console.log("Closing screen..."),on.feed.s.getTracks().forEach(t => t.stop()),console.log("Screen closed."),delete on.feed.s) || (console.log("No screen feed to stop."));const feedEl = document.querySelector('feed');(feedEl) && (video = feedEl.querySelector('video'),(video) && (feedEl.removeChild(video)) || (console.log("No screen feed to close.")));}
off.cam = () => {(on.cam.s) && (console.log("Closing cam..."),on.cam.s.getTracks().forEach(t => t.stop()),console.log("Cam closed."),delete on.cam.s) || (console.log("No cam to stop."));const camEl = document.querySelector('cam')??'';(camEl) && (video = camEl.querySelector('video'),(video) && (camEl.removeChild(video))||(console.log("No cam to close.")));};
off.mic = () => {(on.mic.s) && (console.log("Closing mic..."),on.mic.s.getTracks().forEach(t => t.stop()),console.log("Mic closed."),delete on.mic.s)||(console.log("No mic to close."))}

const rec = new class { _8473 = null; _ajn3 = []; _feedData = []; _camData = []; async start(target) { try { alert(`Recording ${target}`); let vid = null; let stream = null; if (target === 'cam') { vid = bon('cam>video'); } else if (target === 'feed') { vid = bon('feed>video'); } if (vid && vid.srcObject) { stream = vid.srcObject; } if (!stream) { console.error(`No valid stream found for ${target}.`); return; } const options = { mimeType: 'video/webm; codecs=vp8' }; if (target === 'cam') { this._camRecorder = new MediaRecorder(stream, options); this._camRecorder.ondataavailable = e => this._camData.push(e.data); this._camRecorder.start(); } else if (target === 'feed') { this._feedRecorder = new MediaRecorder(stream, options); this._feedRecorder.ondataavailable = e => this._feedData.push(e.data); this._feedRecorder.start(); } } catch (e) { console.error('Recording failed:', e); } }; stop() { if (this._camRecorder && this._camRecorder.state !== 'inactive') { alert('Stop Recording'); this._camRecorder.stop(); this._camRecorder.onstop = () => { const camBlob = new Blob(this._camData, { type: 'video/webm' }); const camURL = URL.createObjectURL(camBlob); const camDownloadLink = bon.add('a'); camDownloadLink.style.display = 'none'; camDownloadLink.href = camURL; camDownloadLink.download = `cam-${Math.floor(Math.random() * 9e9)}.webm`; document.body.appendChild(camDownloadLink); camDownloadLink.click(); document.body.removeChild(camDownloadLink); window.URL.revokeObjectURL(camURL); this._camData = []; }; } if (this._feedRecorder && this._feedRecorder.state !== 'inactive') { this._feedRecorder.stop(); this._feedRecorder.onstop = () => { const feedBlob = new Blob(this._feedData, { type: 'video/webm' }); const feedURL = URL.createObjectURL(feedBlob); const feedDownloadLink = bon.add('a'); feedDownloadLink.style.display = 'none'; feedDownloadLink.href = feedURL; feedDownloadLink.download = `feed-${Math.floor(Math.random() * 9e9)}.webm`; document.body.appendChild(feedDownloadLink); feedDownloadLink.click(); document.body.removeChild(feedDownloadLink); window.URL.revokeObjectURL(feedURL); this._feedData = []; }; } } };
const snap = (target) => {try {let v_el = null;if (target === 'cam') {v_el =bon('cam>video');} else if (target === 'feed') {v_el =bon('feed>video');}if (v_el && v_el.srcObject) {const canvas = bon.add('canvas');const context = canvas.getContext('2d');canvas.width = v_el.videoWidth;canvas.height = v_el.videoHeight;context.drawImage(v_el, 0, 0, canvas.width, canvas.height);const imageData = canvas.toDataURL('image/png');const imgLink = bon.add('a');imgLink.href = imageData;imgLink.download = `${target}-snapshot-${Math.floor(Math.random() * 9e9)}.png`;imgLink.click();} else {console.error(`No valid video stream found for ${target}.`);}} catch (e) {console.error('Capture failed:', e);}};

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

const AutoUI = () => {
let s = new Set([
"ask", "nav", "task", "preview",
"slide", "card", "say", "tap", "slide", 
"tab"
]);

let a = (u) => {
if (!document.querySelector(`link[href='${u}']`)) {
let l = document.createElement("link");
l.rel = "preload";
l.as = "style";
l.href = u;
document.head.appendChild(l);

let c = document.createElement("link");
c.rel = "stylesheet";
c.href = u;
document.head.appendChild(c);

let l2 = document.createElement("link");
l2.rel = "preload";
l2.as = "style";
l2.href = u;
document.head.appendChild(l2);

let c2 = document.createElement("link");
c2.rel = "stylesheet";
c2.href = `https://iselang.github.io/${u}`;
document.head.appendChild(c2);
}
};

s.forEach(e => {
if (document.querySelector(e)) {
a(`ui/${e}.css`);
}
});
};

AutoUI();load('ui/l.css');
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

