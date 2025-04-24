
(function(){
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
})();