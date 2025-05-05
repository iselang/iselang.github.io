
(function(){
const AutoUI=()=>{
let s = new Set(["ask", "nav", "task", "preview", "slide", "cont", "card", "item", "row", "say", "tap", "slide", "tab"]);

const cssContent = {
ask: `

ask {
display:flex;
place-content: left;
display: block;
min-width: 10px;
max-width: 100%;
padding: 0.08in 0.15in;
border-radius: var(--bdr);
height: auto;
min-height: auto;
max-height: none;
overflow: auto;
resize: vertical;
justify-content: left;
text-align: left;
}
ask:empty::before {
content: attr(say);
color: var(--b2);
}
`,
nav: `
nav{
display: block;
place-content: center;
justify-content: center;
min-height: 2em;
width: auto;
max-width: 1280px;
top: 0;
position: sticky;
z-index: 2;
}
`,

task: `

task{
display: block;
place-content: center;
justify-content: center;
min-height: 2em;
width: auto;
bottom: 0;
position: sticky;
z-index: 2;
padding:2.5px;
}
`,

preview: `
previews {
display: flex;
overflow-x: auto;
width: auto ;
scroll-snap-type: x mandatory;
padding:2.5px;
gap: 2.5px;
}

preview {
flex-shrink: 0;
width: 150px;
height: 190px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: white;
scroll-snap-align: center; 
}
previews {
display: flex;
overflow-x: auto;
width: auto ;
scroll-snap-type: x mandatory;
padding:2.5px;
}

preview {
flex-shrink: 0;
width: 150px;
height: 190px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: white;
scroll-snap-align: center; 
}


`,

slide: `

slides {
display: flex;
overflow-x: auto;
width: auto;
scroll-snap-type: x mandatory; 
padding: 2px;   
scroll-padding: 2px;
}

slide {
flex-shrink: 0;
width: 100%;
height: 80svh;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
scroll-snap-align: start; 
}

`,
cont: `
cont{
display: block;
place-content: center;
justify-content: flex;
height: 90svh;
width: auto;

}


`,

card: `
cards {
display: grid;
grid-template-columns: repeat(2, 1fr);
width: auto;
overflow-x: hidden;
padding:2.5px;
gap: 2.5px;
}

card {
width: 100%;
min-height: 200px;
max-height: 200px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
}

@media (min-width: 600px) and (max-width: 1024px) {
cards {
grid-template-columns: repeat(3, 1fr); 
gap: 2.5px;
}
}

@media (min-width: 1024px) {
cards {
grid-template-columns: repeat(4, 1fr); gap: 2.5px;
}
}

card img{
 width:100%;
 object-fit:cover;
}

card img:first-child{
 height:80px;
}

card img:last-child:not(:first-child){
 height:60px;
 margin-top:auto;
}


`,
item: `

item { 
display: flex;
place-content:center; 
align-items: center;
justify-content: center;
}

`,
row: `
row { 
display: flex;
place-content:center; 
align-items: center;
justify-content: center;
flex-direction: row;
}
row * {
flex: 1;
}

`,
say: `

say {
display:block;
height: auto;
min-height: auto;
max-height: none;
overflow: auto;
resize: none;
justify-content: left;
text-align: left;
font-size:20px;
}

say[small] {
height: auto;
min-height: auto;
max-height: none;
overflow: auto;
resize: none;
justify-content: left;
text-align: left;
font-size:16px;
}

say[mid] {
height: auto;
min-height: auto;
max-height: none;
overflow: auto;
resize: none;
justify-content: left;
text-align: left;
font-size:24px;
}

say[big] {
height: auto;
min-height: auto;
max-height: none;
overflow: auto;
resize: none;
justify-content: left;
text-align: left;
font-size: 28px;
}


`,
tap: `
tap {
display:flex;
place-content: center;
display: block;
min-width: 10px;
max-width: max-content;
padding: 0.08in 0.15in;
border-radius: var(--bdr);
height: auto;
min-height: auto;
max-height: none;
overflow: auto;
justify-content: center;
text-align: center;
}
`,

tab: `
tabs {
display: flex;
overflow-x: auto;
width: auto ;
scroll-snap-type: x mandatory;
padding:2.5px;
gap: 2.5px;
}

tab {
flex-shrink: 0;
width: 120px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
scroll-snap-align: center; 
}

`
};

let a = (u) => {
const tyDUI = u.replace("ui", '').replace("/", '').replace(".css", '');
if (!pick(`style[data='${tyDUI}']`)) {
let style = make("style");
style.setAttribute('data', tyDUI);
document.body.appendChild(style);

if (cssContent[tyDUI]) {
style.textContent = cssContent[tyDUI];
} else {
console.error(`CSS content for ${tyDUI} not found.`);
}
}
};

let att=()=>{
let all=document.querySelectorAll(["[bend]","[bendl]","[bendr]","[bendt]","[bendb]","[bendtl]","[bendtr]","[bendbl]","[bendbr]","[gap]","[pad]","[kind]","[padl]","[padr]","[padt]","[padb]","[space]","[spacel]","[spacer]","[spacet]","[spaceb]","[center]","[left]","[right]"]);
all.forEach(el=>{
let st=el.style;
el.hasAttribute("kind")&&(st.display=el.getAttribute("kind"));
el.hasAttribute("gap")&&(st.gap=el.getAttribute("gap")+"px");
el.hasAttribute("bend")&&(st.borderRadius=el.getAttribute("bend")+"px");
el.hasAttribute("bendl")&&(st.borderTopLeftRadius=st.borderBottomLeftRadius=el.getAttribute("bendl")+"px");
el.hasAttribute("bendr")&&(st.borderTopRightRadius=st.borderBottomRightRadius=el.getAttribute("bendr")+"px");
el.hasAttribute("bendt")&&(st.borderTopLeftRadius=st.borderTopRightRadius=el.getAttribute("bendt")+"px");
el.hasAttribute("bendb")&&(st.borderBottomLeftRadius=st.borderBottomRightRadius=el.getAttribute("bendb")+"px");
el.hasAttribute("bendtl")&&(st.borderTopLeftRadius=el.getAttribute("bendtl")+"px");
el.hasAttribute("bendtr")&&(st.borderTopRightRadius=el.getAttribute("bendtr")+"px");
el.hasAttribute("bendbl")&&(st.borderBottomLeftRadius=el.getAttribute("bendbl")+"px");
el.hasAttribute("bendbr")&&(st.borderBottomRightRadius=el.getAttribute("bendbr")+"px");
el.hasAttribute("row")&&(st.display="flex",st.gap="9px",st.flexDirection="row",st.justifyContent="center",st.placeItems="center",st.flexWrap="wrap");
el.hasAttribute("row")&&Array.from(el.children).forEach(child=>{child.style.setProperty('flex','1','important');child.style.setProperty('max-width','unset','important');});
el.hasAttribute("pad")&&(st.padding=el.getAttribute("pad")+"px");
el.hasAttribute("padl")&&(st.paddingLeft=el.getAttribute("padl")+"px");
el.hasAttribute("padr")&&(st.paddingRight=el.getAttribute("padr")+"px");
el.hasAttribute("padt")&&(st.paddingTop=el.getAttribute("padt")+"px");
el.hasAttribute("padb")&&(st.paddingBottom=el.getAttribute("padb")+"px");
el.hasAttribute("space")&&(st.margin=el.getAttribute("space")+"px");
el.hasAttribute("spacel")&&(st.marginLeft=el.getAttribute("spacel")+"px");
el.hasAttribute("spacer")&&(st.marginRight=el.getAttribute("spacer")+"px");
el.hasAttribute("spacet")&&(st.marginTop=el.getAttribute("spacet")+"px");
el.hasAttribute("spaceb")&&(st.marginBottom=el.getAttribute("spaceb")+"px");
el.hasAttribute("center")&&(st.display="grid",st.placeItems="center");
el.hasAttribute("left")&&(st.display="grid",st.placeItems="start");
el.hasAttribute("right")&&(st.display="grid",st.placeItems="end");
});
};

s.forEach(e=>document.querySelector(e)?a(`ui/${e}.css`):0);
att();
};
AutoUI();
AutoUI&&(window.AutoUI=AutoUI);
})();
