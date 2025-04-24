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


make?(window.make=make):'';
})();