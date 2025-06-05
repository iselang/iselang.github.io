(function(){
const make=rel=>{return document.createElement(rel||'body')};
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

make.linux = function () {
if (document.querySelector('script[numcompile]')) return; 

const script = document.createElement("script");
script.type = "module";
script.setAttribute("numcompile", "");

script.textContent = `
import JSZip from "https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm";

const DEFAULT_ICON_URL = "https://ise.web.app/fa/1.png";
const TRANSPARENT_PNG_BASE64 =
"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgB3q7xkAAAAASUVORK5CYII=";

async function fetchAppLinuxFromBase64(url) {
const res = await fetch(url);
if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
const base64 = (await res.text()).trim();
const binaryString = atob(base64);
const len = binaryString.length;
const bytes = new Uint8Array(len);
for (let i = 0; i < len; i++) {
bytes[i] = binaryString.charCodeAt(i);
}
return new Blob([bytes], { type: "application/octet-stream" });
}

async function tryFetchIconBlob(url) {
try {
const res = await fetch(url);
if (!res.ok) return null;
return await res.blob();
} catch {
return null;
}
}

function transparentPNGBlob() {
const binary = atob(TRANSPARENT_PNG_BASE64);
const len = binary.length;
const bytes = new Uint8Array(len);
for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
return new Blob([bytes], { type: "image/png" });
}

async function makeZip() {
const zip = new JSZip();
const assetFolder = zip.folder("asset");

const appLinuxBlob = await fetchAppLinuxFromBase64("https://iselang.github.io/make/app.txt");
zip.file("app.linux", appLinuxBlob);

const title = document.title?.trim() || "Untitled App";
const zipName = (title.replace(/[^a-z0-9-_]/gi, "_") || "Untitled_App") + ".zip";

let iconURL = document.querySelector('link[rel="icon"]')?.href;
if (!iconURL || iconURL === window.location.href) iconURL = null;

let iconBlob = null;
if (iconURL) iconBlob = await tryFetchIconBlob(iconURL);
if (!iconBlob) iconBlob = await tryFetchIconBlob(DEFAULT_ICON_URL);
if (!iconBlob) iconBlob = transparentPNGBlob();

assetFolder.file("1.png", iconBlob);

const setTxt = \`title:\${title}\\nicon:1.png\`;
assetFolder.file("set.txt", setTxt);

const selfScript = document.querySelector('script[numcompile]');
if (selfScript) selfScript.remove();

document.querySelectorAll("style[data]").forEach(el => el.remove());

const cleanedHTML = document.documentElement.outerHTML;
assetFolder.file("app.num", cleanedHTML);

const zipBlob = await zip.generateAsync({ type: "blob" });
const a = document.createElement("a");
a.href = URL.createObjectURL(zipBlob);
a.download = zipName;
a.style.display = "none";
document.body.appendChild(a);
a.click();
a.remove();

setTimeout(() => location.reload(), 1000);
}

makeZip().catch(err => {
alert("Failed to build zip:\\n" + err.message);
console.error(err);
});
`;

document.body.appendChild(script);
};

make.lin=()=>make.linux();
make.linu=()=>make.linux();
make.android=()=>{
pick().innerText="";
at1=make("tap");
at1.at=[`do="path.go('https://github.com/new')`,`lbg`, `pad="10"`, `space="5"`]
at1.text="1. Web it."

at2=make("tap");
at2.at=[`do="path.go('https://median.co')`, `lbg`, `pad="10"`,`space="5"`]

at2.text="2. You Median it."

pick().put=at1;
pick().put=at2;

func();
AutoUi();
}
make.an=()=>make.android();
make.and=()=>make.android();
make.andr=()=>make.android();
make.andro=()=>make.android();
make.androi=()=>make.android();


make?(window.make=make):'';
})();
