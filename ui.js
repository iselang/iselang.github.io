
(function(){
const AutoUI=()=>{
let s=new Set(["ask","nav","task","preview","slide","cont","card","item","row","say","tap","slide","tab"]);

let a=async u=>{
const tyDUI=u.replace("ui",'').replace("/",'').replace(".css",'');
if(!pick(`style[data='${tyDUI}']`)){
let style=make("style");
style.at=`data='${tyDUI}'`;
document.body.appendChild(style);
try{
let response=await fetch(u);
if(response.ok){
style.textContent=await response.text();
}else{
let fallback=await fetch(`https://iselang.github.io/${u}`);
if(fallback.ok){
style.textContent=await fallback.text();
}
}
}catch(e){
console.error(`Failed to fetch CSS for ${u}:`,e);
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
AutoUI();load('ui/l.css');load('num/ui/l.css');
AutoUI&&(window.AutoUI=AutoUI);
})();