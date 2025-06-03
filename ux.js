
(function(){
const AutoUI=()=>{
let s=new Set([
"ask","nav","task",
"preview","slide",
"cont","card","layout",
"item","row","say",
"tap","tab","scroll"
]);
const cssContent={
ask:`
ask{display:block;min-width:10px;max-width:100%;padding:.08in .15in;border-radius:var(--bdr);height:auto;min-height:auto;max-height:none;overflow:auto;resize:vertical;justify-content:left;text-align:left;}
ask:empty::before{content:attr(say);color:#ebe9ff74!important;}
`,
nav:`
nav{display:block;place-content:center;justify-content:center;min-height:2em;width:auto;max-width:1280px;top:0;position:sticky;z-index:2;}
`,
task:`
task{display:block;place-content:center;justify-content:center;min-height:2em;width:auto;bottom:0;position:sticky;z-index:2;padding:2.5px;}
`,
preview:`
previews{display:flex;overflow-x:auto;width:auto;scroll-snap-type:x mandatory;padding:2.5px;gap:2.5px;}
preview{flex-shrink:0;width:150px;height:190px;display:flex;align-items:center;justify-content:center;text-align:center;color:white;scroll-snap-align:center;}
`,
layout:`
@media screen{
layout{height:100vh;margin:0;overflow:hidden;display:flex;flex-direction:column;top:0;left:0;right:0;bottom:0;flex-wrap:wrap;}
layout section{display:contents;justify-content:center;min-width:0%;min-height:0vh;flex-wrap:wrap;width:100%;}
layout box:not(box[scroll]){display:block;flex-wrap:wrap;padding:.3em;place-content:center;place-items:center;flex-grow:1;border:0;width:auto;height:auto;min-width:.5in;min-height:.5in;gap:2px;}
layout span{flex-grow:1;flex-wrap:wrap;display:flex;flex-direction:row;}
layout box[small],tap[box]{flex-wrap:wrap;flex-grow:1;border:0;max-width:1in;}
layout box[scroll]{flex-wrap:wrap;display:block;padding:.1em;flex-grow:1;place-content:left;border:0;width:auto;height:auto;min-width:.5in;min-height:.5in;overflow-y:scroll;}
layout [scroll]{overflow-y:scroll;}
layout box[scroll] *{margin:.5em;}
}
`,
slide:`
slides{display:flex;overflow-x:auto;width:auto;scroll-snap-type:x mandatory;padding:2px;scroll-padding:2px;}
slide{flex-shrink:0;width:90%;height:80svh;display:flex;align-items:center;justify-content:center;text-align:center;scroll-snap-align:center;}
`,
cont:`cont{display:block;place-content:center;justify-content:flex;height:90svh;width:auto}`,
card:`
cards{display:grid;grid-template-columns:repeat(2,1fr);width:auto;overflow-x:hidden;padding:2.5px;gap:2.5px}
card{width:100%;min-height:200px;max-height:200px;height:200px;display:flex;align-items:center;justify-content:center;text-align:center;}
@media(min-width:600px)and(max-width:1024px){cards{grid-template-columns:repeat(3,1fr);gap:2.5px}}
@media(min-width:1024px){cards{grid-template-columns:repeat(4,1fr);gap:2.5px}}
card img{width:100%;object-fit:cover}
card img:first-child{height:80px}
card img:last-child:not(:first-child){height:60px;margin-top:auto}
`,
item:`item{display:flex;place-content:center;align-items:center;justify-content:center}`,
row:`row{display:flex;place-content:center;align-items:center;justify-content:center;flex-direction:row}row *{flex:1;}`,
say:`
say{display:block;height:auto;min-height:auto;max-height:none;overflow:auto;resize:none;justify-content:left;text-align:left;font-size:20px;border-radius:0!important;}
say[small]{font-size:16px;}
say[mid]{font-size:24px;}
say[big]{font-size:28px;}
`,
tap:`tap{display:block;min-width:10px;max-width:max-content;padding:.08in .15in;border-radius:var(--bdr);height:auto;min-height:auto;max-height:none;overflow:auto;justify-content:center;text-align:center;}`,
tab:`
tabs{display:flex;overflow-x:auto;width:auto;scroll-snap-type:x mandatory;padding:2.5px;gap:2.5px;}
tab{flex-shrink:0;width:120px;height:60px;display:flex;align-items:center;justify-content:center;text-align:center;scroll-snap-align:center;}
`,
scroll:`
scroll{width:136px;height:18px;display:flex;align-items:center;justify-content:center;}
scroll input[type=range]{-webkit-appearance:none;width:136px;height:18px;background:transparent;outline:none;}
scroll input[type=range]::-webkit-slider-runnable-track{height:18px;background:var(--b2);border-radius:50px;}
scroll input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:18px;width:64px;background:#fff;border-radius:50px;cursor:pointer;box-shadow:0 0 2px #000;margin-top:0;transition:background .2s;}
scroll input[type=range]:hover::-webkit-slider-thumb{background:#ccc;}
scroll input[type=range]::-moz-range-track{height:18px;background:var(--b2);border-radius:50px;}
scroll input[type=range]::-moz-range-thumb{height:18px;width:64px;background:#fff;border:none;border-radius:50px;cursor:pointer;box-shadow:0 0 2px #000;}
`
};

const make=s=>document.createElement(s);
const pick=s=>document.querySelector(s);

const somescroll=()=>{  
document.querySelectorAll('scroll').forEach(x=>{  
if(x.querySelector('input[type=range]'))return  
let r=document.createElement('input')  
r.type='range';r.min=0;r.value=0;x.append(r); 
let s=x.previousElementSibling  
if(!s)return  
let u=()=>r.max=s.scrollWidth-s.clientWidth  
let v=()=>s.scrollLeft=r.value  
let w=()=>r.value=s.scrollLeft  
r.oninput=()=>v()  
s.onscroll=()=>w()  
window.addEventListener('load',u)  
window.addEventListener('resize',u)  
})  
}

let a=(u)=>{
const tyDUI=u.replace("ui","").replace("/","").replace(".css","");
if(!pick(`style[data='${tyDUI}']`)){
let style=make("style");
style.setAttribute("data",tyDUI);
document.body.appendChild(style);
if(cssContent[tyDUI]){
style.textContent=cssContent[tyDUI];
}else{console.error(`CSS content for ${tyDUI} not found.`);}
}
};

let att=()=>{
let all=document.querySelectorAll("[bend],[bendl],[bendr],[bendt],[bendb],[bendtl],[bendtr],[bendbl],[bendbr],[gap],[pad],[kind],[padl],[padr],[padt],[padb],[space],[spacel],[spacer],[spacet],[spaceb],[center],[left],[right]");
all.forEach(el=>{
let st=el.style;
el.hasAttribute("kind")&&(st.display=el.getAttribute("kind"));
if(el.hasAttribute("hei")){
let vals=el.getAttribute("hei").split(" ");
if(vals.length===1)st.maxHeight=vals[0]+"px";
else if(vals.length===2){
st.minHeight=vals[0]+"px";
st.maxHeight=vals[1]+"px";
}
}
if(el.hasAttribute("wid")){
let vals=el.getAttribute("wid").split(" ");
if(vals.length===1)st.maxWidth=vals[0]+"px";
else if(vals.length===2){
st.minWidth=vals[0]+"px";
st.maxWidth=vals[1]+"px";
}
}
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
el.hasAttribute("row")&&Array.from(el.children).forEach(child=>{child.style.setProperty("flex","1","important");child.style.setProperty("max-width","unset","important")});
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
el.hasAttribute("center")&&(st.textAlign="center",st.justifyContent="center",st.placeItems="center",st.placeContent="center");
el.hasAttribute("left")&&(st.textAlign="left",st.justifyContent="left",st.placeItems="left",st.placeContent="left");
el.hasAttribute("right")&&(st.textAlign="right",st.justifyContent="right",st.placeItems="right",st.placeContent="right");
})
};
s.forEach(u=>a(u));
att();somescroll();

AutoUI();
AutoUI&&(window.AutoUI=AutoUI);
}
})()
