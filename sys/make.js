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
