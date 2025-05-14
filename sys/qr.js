(function(){

qr=val=>{qr.val=val};
qr.makes=()=>NUM.load('https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js').then(()=>QR_CODE.toCanvas(document.body,qr.val,(e)?(0,0):(0,0)));
qr.show=where=>QR_CODE.toCanvas(document.querySelector(where),qr.val,(e)?(0,0):(0,0));

qr?(window.qr=qr):'';
})();
